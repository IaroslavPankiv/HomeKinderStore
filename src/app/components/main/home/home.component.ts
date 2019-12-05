import { Component, OnInit } from '@angular/core';
import {PostHome} from "../../../interface";
import {dataHome} from "../../../dataHome";






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  i =0;
  images = []
  postHome:PostHome[];


  constructor() { }



  ngOnInit() {

    this.postHome = dataHome;
    console.log(dataHome)
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


  private prev() {
    console.log(this.images)
    if (this.i === 0) {
      this.i = 7;
    } else {
      this.i--;
    }
  }

  private next(){
      if (this.i === this.images.length-1){
        this.i = 0;
      } else {
        this.i++;
      }
}

}
