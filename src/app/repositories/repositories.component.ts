import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { shareAndCache } from 'http-operators';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Repo } from '../models/repo';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card-item', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
          ])
        ])
      ])
    ])
  ]
})
export class RepositoriesComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  repos$: Observable<Repo[]>;
  inputForm = new FormGroup({
    search: new FormControl()
  });

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.repos$ = this.inputForm.get('search').valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.findRepos(value)),
        shareAndCache('repos'),
      );
  }

  findRepos(filter): Observable<Repo[]> {
    filter = filter ? filter : 'angular';
    return this.http.get<Repo[]>(`https://api.github.com/search/repositories?q=${filter}`)
      .pipe(map((data: any) => data.items));
  }
}
