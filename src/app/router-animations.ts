import { animate, animation, group, query, stagger, style } from '@angular/animations';

export const PAGE_IN_ANIMATION = animation([
  query('.full-page', [
    style({ opacity: 0, marginTop: '-100px' }),
  ], { optional: true }),
  query('.full-page > *', [
    style({ opacity: 0, marginTop: '100px' }),
  ], { optional: true }),
  group([
    query('.full-page', [
      animate('900ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, marginTop: '0px' }))
    ], { optional: true }),
    query('.full-page > *', [
      stagger(50, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, marginTop: '0px' }))
      ])
    ], { optional: true }),
  ])
]);

export const PAGE_OUT_ANIMATION = animation([
  group([
    query('.full-page > *', [
      stagger(50, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, marginTop: '-100px' }))
      ])
    ], { optional: true }),
    query('.full-page', [
      animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, marginTop: '100px' }))
    ], { optional: true }),
  ])
]);
