import { Component, OnInit } from '@angular/core';
import {Item, PostHome} from "../../../interface";
import {dataHome} from "../../../dataHome";
import {HttpServeceService} from "../http-servece.service";
import {Router} from "@angular/router";






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  i =0;
  images = [];
  postHome:PostHome[];


  constructor(private httpServise: HttpServeceService,
              private router: Router) { }



  ngOnInit() {
    this.postHome = dataHome;
    this.images = [
      {url: '../../../../assets/img-kinder/kinderSlider3.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider4.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider5.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider6.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider7.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider8.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider9.jpg'},
      {url: '../../../../assets/img-kinder/kinderSlider10.jpg'}
    ]
  }

//роут на сторінку опис поста
  private toInfo(post: PostHome) {
    this.httpServise.post = post;
    this.router.navigate(['/home/post']);
  }



  //слайдер в ліво
  private prev() {
    if (this.i === 0) {
      this.i = 7;
    } else {
      this.i--;
    }
  }

  //слайдер в право
  private next(){
      if (this.i === this.images.length-1){
        this.i = 0;
      } else {
        this.i++;
      }
}

}
