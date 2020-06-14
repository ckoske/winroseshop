import { Component, Input, OnChanges } from '@angular/core';
import { IItem } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.pug',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnChanges {
  @Input() category: string;
  @Input() isMain: boolean;

  bags: IItem[] =[
    {
      type: 'bag',
      name: 'UOMO second bag / black',
      price: 3000,
      image: 'assets/images/bags/bag1.jpg'
    },
    {
      type: 'bag',
      name: 'Small tote bag/camel',
      price: 4000,
      image: 'assets/images/bags/bag2.jpg'
    },
    {
      type: 'bag',
      name: 'Small tote bag / chocolate',
      price: 6500,
      image: 'assets/images/bags/bag3.jpg'
    },
    {
      type: 'bag',
      name: 'Small tote bag / red',
      price: 5300,
      image: 'assets/images/bags/bag4.jpg'
    }
  ];

  wallets: IItem[] = [
    {
      type: 'wallet',
      name: 'UOMO coin case / all 3 colors',
      price: 1000,
      image: 'assets/images/wallets/wallet1.jpg'
    },
    {
      type: 'wallet',
      name: 'Tri-fold piccolo wallet / 5 colors',
      price: 2000,
      image: 'assets/images/wallets/wallet2.jpg'
    },
    {
      type: 'wallet',
      name: 'Bi-fold wallet 4/4 colors',
      price: 1900,
      image: 'assets/images/wallets/wallet3.jpg'
    },
    {
      type: 'wallet',
      name: 'Mini wallet/3 colors',
      price: 2300,
      image: 'assets/images/wallets/wallet4.jpg'
    }
  ];

  cases: IItem[] = [
    {
      type: 'case',
      name: 'UOMO glasses case A / 3 colors',
      price: 900,
      image: 'assets/images/cases/case1.jpg'
    },
    {
      type: 'case',
      name: 'UOMO glasses case B / 2 colors',
      price: 1300,
      image: 'assets/images/cases/case2.jpg'
    },
    {
      type: 'case',
      name: 'Business card holder / 12 colors',
      price: 2300,
      image: 'assets/images/cases/case3.jpg'
    },
    {
      type: 'case',
      name: 'Pouch / 4 colors',
      price: 1800,
      image: 'assets/images/cases/case4.jpg'
    }
  ];

  keyholders: IItem[] = [
    {
      type: 'keyholder',
      name: 'UOMO Keychain / Black',
      price: 500,
      image: 'assets/images/keyholders/keyholder1.jpg'
    },
    {
      type: 'keyholder',
      name: 'Keychain Type-A / 9 colors',
      price: 700,
      image: 'assets/images/keyholders/keyholder2.jpg'
    },
    {
      type: 'keyholder',
      name: 'Key chain Type-B / 8 colors',
      price: 650,
      image: 'assets/images/keyholders/keyholder3.jpg'
    },
    {
      type: 'keyholder',
      name: 'Key chain Type-C / 9 colors',
      price: 940,
      image: 'assets/images/keyholders/keyholder4.jpg'
    }
  ];

  others: IItem[] = [
    {
      type: 'other',
      name: 'Belt 1/2 colors',
      price: 500,
      image: 'assets/images/others/other1.jpg'
    },
    {
      type: 'other',
      name: 'Belt 2 chocolate/navy (made to order)',
      price: 700,
      image: 'assets/images/others/other2.jpg'
    },
    {
      type: 'other',
      name: 'Chair / All 3 colors',
      price: 650,
      image: 'assets/images/others/other3.jpg'
    },
    {
      type: 'other',
      name: 'Major/5 colors',
      price: 940,
      image: 'assets/images/others/other4.jpg'
    }
  ];

  items: IItem[] = [];
  
  constructor() { }

  ngOnChanges(): void {
    switch (this.category) {
      case "bags": {
        this.items = this.bags;
        break;
      }
      case "wallets": {
        this.items = this.wallets;
        break;
      }
      case "cases": {
        this.items = this.cases;
        break;
      }
      case "keyholders": {
        this.items = this.keyholders;
        break;
      }
      case "others": {
        this.items = this.others;
        break;
      }
      default: {
        this.items = [ ...this.bags, ...this.wallets, ...this.cases, ...this.keyholders, ...this.others];
        break;
      }
    }
  }

}
