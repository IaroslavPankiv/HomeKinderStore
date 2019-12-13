import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //редірект на сайт кіндера
 private toKinder() {
    window.location.href='https://www.kinder.com'
  }
}
