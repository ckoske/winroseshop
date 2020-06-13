import { Component, OnInit } from '@angular/core';
import { IInformation } from './information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.pug',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  information: IInformation[] = [
    { 
      date: new Date(2020, 3, 9),
      message: ' The OUT SIDE lineup, regardless of gender, has created a UOMO series with a simpler and more functional design that is conscious of men. It will be sold sequentially.'
    },
    { 
      date: new Date(2020, 4, 10),
      message: ' The workshop holidays in June are 3 (Wed), 10 (Wed), 17 (Wed) and 24 (Wed). Additional holidays will be announced at any time.'
    },
    { 
      date: new Date(2020, 5, 11),
      message: ' The new small tote bag has 3 colors.'
    },
    { 
      date: new Date(2020, 6, 12),
      message: 'The leather that can be made with OUT SIDE has a total of 12 colors, including new colors (oak and purple). Colors not listed in each model will be manufactured if you place an order. Please contact us before ordering, as leather may not be in stock.'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
