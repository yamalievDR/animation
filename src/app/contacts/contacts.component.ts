import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { PAGE_IN_ANIMATION, PAGE_OUT_ANIMATION } from '../router-animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', useAnimation(PAGE_IN_ANIMATION)),
      transition(':leave', useAnimation(PAGE_OUT_ANIMATION))
    ]),
  ]
})
export class ContactsComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  constructor() { }

  ngOnInit() {
  }

}
