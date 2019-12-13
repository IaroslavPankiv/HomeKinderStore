import {Component, Input, OnInit} from '@angular/core';
import {HttpServeceService} from "../../http-servece.service";
import {Item} from "../../../../interface";
import {Router} from "@angular/router";



@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],

})
export class ItemInfoComponent implements OnInit {



  constructor(private httpServise: HttpServeceService,
              private router: Router) { }

  ngOnInit() {

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
