import { Component, Input, OnInit } from '@angular/core';
import { INavCrumb } from './navcrumb';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.pug',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() crumbs: INavCrumb[];
  @Input() current: string;

  constructor() { }

  ngOnInit(): void {}
}
