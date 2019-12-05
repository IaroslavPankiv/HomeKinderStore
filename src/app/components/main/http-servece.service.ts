import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../../interface";

@Injectable({
  providedIn: 'root'
})
export class HttpServeceService {

  items:Item[] = window.localStorage.getItem('arrItems') ? JSON.parse(window.localStorage.getItem('arrItems')): [];
  item:Item;
  sum;

  fireBase = 'https://blog-2ee7f.firebaseio.com';


  constructor(private http: HttpClient) { }


// public getAllItems(){
//
//
//     return this.http.get('https://jsonplaceholder.typicode.com/todos');
//
//   }









}
