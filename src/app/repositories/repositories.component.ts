import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { shareAndCache } from 'http-operators';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repos$: Observable<any>;
  inputForm = new FormGroup({
    search: new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.repos$ = this.inputForm.get('search').valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.findRepos(value))
      );
  }

  findRepos(filter) {
    filter = filter ? filter : 'angular';
    return this.http.get<any>(`https://api.github.com/search/repositories?q=${filter}`)
      .pipe(
        map((data: any) => data.items),
        shareAndCache('repos'),
      );
  }
}
