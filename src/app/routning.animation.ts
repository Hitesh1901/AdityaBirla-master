import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':leave', [
          animateChild(),
          style({ transform: 'translateX(0%)' }),
          animate('0.1s cubic-bezier(.09,.72,.36,.91)', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.1s cubic-bezier(.09,.72,.36,.91)', style({ transform: 'translateX(0%)' })),
          animateChild()
        ], { optional: true }),
      ])
    ])
    ,
    transition('* => master', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      group([
        query(':leave', [
          animateChild(),
          style({ transform: 'translateX(0%)' }),
          animate('0.1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0%)' })),
          animateChild()
        ], { optional: true }),
      ])
    ])
  ])