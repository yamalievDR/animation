import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card', [
          style({opacity: 0, transform: 'translateY(100px)'}),
          animate('800ms ' + NICE_EASING, style({opacity: 1, transform: 'none'}))
        ])
      ])
    ]),
  ]
})
export class CardComponent implements OnInit {
  @HostBinding('@pageAnimations')
  animatePage = true;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
