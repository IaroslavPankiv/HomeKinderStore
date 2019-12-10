import { Component, OnInit } from '@angular/core';
import {Story} from "../../../interface";
import {dataHistory} from "../../../dataHistory";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  storys:Story[] = dataHistory




  constructor() { }

  ngOnInit() {
    console.log(dataHistory)
    console.log(this.storys)
    this.storys = dataHistory
  }

}
