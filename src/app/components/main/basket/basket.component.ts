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
  items: Item [] = [];
  bool:boolean =  false;
  notNumber:string = '';
  order:boolean = false;

  constructor(private httpService: HttpServeceService) {
  }

  ngOnInit() {
    this.countPrice();



  }

private ordering() {
    console.log(this.httpService.check)
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
    if (this.httpService.check.length > 1) {
      this.items = this.httpService.check;
      this.totalPrice = this.totalPrice = this.items.map((i) => {
        return i.price * i.number
      });
      this.totalPrice = this.totalPrice.reduce((i, curVal) => {
        return i + curVal;
      });
    } else{
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



  private checkOrder(item) {
    if (item.number > 0) {
      item.order = true;
      this.httpService.check.push(item);
      this.bool = true;
      this.totalPrice = this.totalPrice = this.items.map((i) => {
        return i.price * i.number
      });
      this.totalPrice = this.totalPrice.reduce((i, curVal) => {
        return i + curVal;
      });

      setTimeout(()=>{
        this.bool = false;
      },1500)
      console.log(this.httpService.check)

    }else {
        this.notNumber = 'add quantity';
      setTimeout(()=>{
        this.notNumber = ''
       },3000)
    }



    }


}

