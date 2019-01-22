import { query, style } from '@angular/animations';

export const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';
export const SHARED_ANIMATION_STYLES = [
  style({position: 'relative', height: '!', overflow: 'hidden'}),
  query(':enter, :leave', [
    style({position: 'absolute', left: 0, top: 0, width: '100%'})
  ]),
  query(':enter', style({opacity: 0}))
];
