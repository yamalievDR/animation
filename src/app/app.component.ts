import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NICE_EASING, SHARED_ANIMATION_STYLES } from './shared/animations/animaition';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimations', [
      transition(':increment', [
        ...SHARED_ANIMATION_STYLES,
        query(':enter', [
          style({opacity: 0, transform: `translateX(100%)`}),
        ]),
        query(':leave', [
          animateChild(),
        ]),
        group([
          query(':leave', [
            animate('1s ' + NICE_EASING, style({
              transform: `translateX(-100%)`,
              opacity: 0
            }))
          ]),
          query(':enter', [
            animate('0.5s 0.1s ' + NICE_EASING, style({opacity: 1, transform: 'none'})),
          ]),
          query(':enter', [
            animateChild()
          ], {delay: '500ms'})
        ]),
      ]),
      transition(':decrement', [
        ...SHARED_ANIMATION_STYLES,
        query(':enter', [
          style({opacity: 0, transform: `translateX(-100%)`}),
        ]),
        query(':leave', [
          animateChild(),
        ]),
        group([
          query(':leave', [
            animate('1s ' + NICE_EASING, style({
              transform: `translateX(100%)`,
              opacity: 0
            }))
          ]),
          query(':enter', [
            animate('0.5s 0.1s ' + NICE_EASING, style({opacity: 1, transform: 'none'})),
          ]),
          query(':enter', [
            animateChild()
          ], {delay: '500ms'})
        ]),
      ]),
    ]),
  ]
})
export class AppComponent {

  prepRouteTransition(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || '';
  }
}
