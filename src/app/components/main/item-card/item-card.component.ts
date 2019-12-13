import { Component, OnInit } from '@angular/core';
import {HttpServeceService} from "../http-servece.service";
import {data} from "../../../dataStore";
import {Item} from "../../../interface";
import {Router} from "@angular/router";
import {logger} from "codelyzer/util/logger";


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  items: Item[] = data;
  item;


  constructor(private router: Router,
              private httpServise: HttpServeceService) {
  }

  ngOnInit() {
    console.log('ppp')
  }

  //роут на сторінку товара
  private toInfo(item: Item) {
      this.httpServise.item = item;

      this.router.navigate(['/store/itemInfo']);
    }


  private addToBasket(item: Item) {
    // провіряю та записую в корзину
    if (this.httpServise.items.length === 0) {
      item.number = 1;
      item.basket = true;
      this.httpServise.items.push(item);
      window.localStorage.setItem('arrItems', JSON.stringify(this.httpServise.items))
    }
    else {
      let filter = this.httpServise.items.filter((i) => i.id == item.id);
      if(filter.length === 0) {
        item.basket = true;
        item.number = 1;
        this.httpServise.items.push(item);
        window.localStorage.setItem('arrItems', JSON.stringify(this.httpServise.items));
      }
    }

  }












}
