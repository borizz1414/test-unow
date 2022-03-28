import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() user: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.user, 'user');
  }
}