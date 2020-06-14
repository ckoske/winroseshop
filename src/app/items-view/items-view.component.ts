import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INavCrumb } from '../nav/navcrumb';


@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.pug',
  styleUrls: ['./items-view.component.css']
})
export class ItemsViewComponent implements OnInit {
  category: string;
  
  crumbs: INavCrumb[] = [
    {text: "Home", href: "/"}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.category = paramMap.get('category');

      if(this.category){
        this.crumbs.push({text: "Items", href: "/items"});
      } else {
        this.category = 'Items';
      }
    });
  }
}
