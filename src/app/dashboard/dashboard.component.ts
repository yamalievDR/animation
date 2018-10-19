import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [
    {
      name: 'Карточка 1',
    },
    {
      name: 'Карточка 2',
    },
    {
      name: 'Карточка 3',
    },
    {
      name: 'Карточка 4',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
