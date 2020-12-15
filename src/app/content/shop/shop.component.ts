import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  titleShop: any;

  title : string ;
  productName : any ;
  subtitle : string ;

  constructor(private _globalService: GlobalService) {
    this.title = 'Shopping Cart';
    this.subtitle = 'Shop now!';


  }

  ngOnInit(): void {
    this.titleShop = this._globalService.appTitle;

    // this.title = this._globalService.toUpperCase(this.title);
    // this.subtitle = this._globalService.appTitle;

    this._globalService.subjectName.subscribe(
      (product: any) => {
        setTimeout(() => {
          this.productName = product;
        }, 10)
      }
    );
  }

}
