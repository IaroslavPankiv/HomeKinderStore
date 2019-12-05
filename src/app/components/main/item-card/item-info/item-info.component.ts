import {Component, Input, OnInit} from '@angular/core';
import {HttpServeceService} from "../../http-servece.service";



@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],

})
export class ItemInfoComponent implements OnInit {



  constructor(private httpService: HttpServeceService) { }

  ngOnInit() {

  }

}
