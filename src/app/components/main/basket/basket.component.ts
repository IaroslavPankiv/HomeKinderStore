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
  bool:boolean =  false;
  notNumber:string = '';
  order:boolean = false;

  constructor(private httpService: HttpServeceService) {
  }

  ngOnInit() {
    this.countPrice();
  }


  // замовлення
  private ordering() {
    if (this.httpService.check.length >= 1){
      console.log('ff')
      this.order = true;
      this.items = null;
      this.httpService.check = [];
      this.totalPrice = null;
      this.httpService.items = [];
      window.localStorage.removeItem('arrItems');
      window.localStorage.setItem('arrItems', JSON.stringify(this.httpService.check))

    }

}


  private countPrice() {
    //вивід ціни та товарів
    this.items = window.localStorage.getItem('arrItems') ? JSON.parse(window.localStorage.getItem('arrItems')) : [];
    if (this.items.length != 0) {
      this.totalPrice = this.totalPrice = this.items.map((i) => i.price * i.number);
      this.totalPrice = this.totalPrice.reduce((i, curVal) => i + curVal);
    }
  }



 private dellItem(item: Item) {
         // видалення товара
      item.basket = false;
      let items = JSON.parse(window.localStorage.getItem('arrItems'))
      items.map(i => {
         return i.id == item.id ? i.basket = false: console.log('p')
          });
      window.localStorage.setItem('arrItems', JSON.stringify(items))
      items = JSON.parse(window.localStorage.getItem('arrItems')).filter(i => i.id != item.id);
      window.localStorage.setItem('arrItems', JSON.stringify(items))
      this.httpService.items = items;
      this.items = items;
      if (this.httpService.items.length === 0) {
        this.totalPrice = 0;
      }
      this.countPrice();
  }

  //підтвердження замовлення
  private checkOrder(item) {
    if (item.number > 0) {
      item.order = true;
      item.basket = false;
      this.httpService.check.push(item);
      this.bool = true;
      let items = JSON.parse(window.localStorage.getItem('arrItems'));
      items.map(i => {
        if (i.id===item.id) {
          i.order = true;
          i.number = item.number;
        }
        return i
      });
      window.localStorage.setItem('arrItems', JSON.stringify(items));
      this.totalPrice = this.totalPrice = this.items.map((i) => i.price * i.number);
      this.totalPrice = this.totalPrice.reduce((i, curVal) => i + curVal);

      setTimeout(()=>{
        this.bool = false;
      },1500)

    }
      else {
          this.notNumber = 'add quantity';
        setTimeout(()=>{
          this.notNumber = ''
         },3000)
      }
    }








}

