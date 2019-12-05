import { Component, OnInit } from '@angular/core';
import {HttpServeceService} from "../http-servece.service";
import {Item} from "../../../interface";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  countVal: number = 0;
  totalPrice;
  items: Item [];

  constructor(private httpService: HttpServeceService) {
  }

  ngOnInit() {
    this.countPrice()

  }


  private countPrice() {
    //вивід ціни та товарів
      this.items = JSON.parse(window.localStorage.getItem('arrItems'));
      if (this.items.length != 0) {
        this.totalPrice = this.items.map((i) => {
          return i.price
        });
        this.totalPrice = this.totalPrice.reduce((i, curVal) => {
          return i + curVal;
        });
      }



    }


  private getItems() {

    }


 private dellItem(item: Item) {
    // видалення товара
    const items = JSON.parse(window.localStorage.getItem('arrItems')).filter(i => i.id != item.id);
   window.localStorage.setItem('arrItems', JSON.stringify(items))
   this.httpService.items = items;

   if (this.httpService.items.length === 0) {
     this.totalPrice = 0;
   }


   this.countPrice()
  }
}

