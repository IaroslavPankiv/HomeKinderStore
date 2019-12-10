import { Component, OnInit } from '@angular/core';
import {HttpServeceService} from "../main/http-servece.service";
import {dataHome} from "../../dataHome";
import {Item, PostHome} from "../../interface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logoFoter:PostHome;

  constructor() { }

  ngOnInit() {
    this.logoFoter = dataHome[0];
  }

}
