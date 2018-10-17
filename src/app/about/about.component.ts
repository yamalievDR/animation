import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../router-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  constructor() { }

  ngOnInit() {
  }

}
