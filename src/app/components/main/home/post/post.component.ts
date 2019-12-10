import { Component, OnInit } from '@angular/core';
import {HttpServeceService} from "../../http-servece.service";
import {PostHome} from "../../../../interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post:PostHome;

  constructor(private httServise: HttpServeceService) { }

  ngOnInit() {
    this.post = this.httServise.post
  }




}
