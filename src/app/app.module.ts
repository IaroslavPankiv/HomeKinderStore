
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/main/aside/aside.component';
import { ItemCardComponent } from './components/main/item-card/item-card.component';
import {FormsModule} from "@angular/forms";
import { StoreComponent } from './components/main/store/store.component';
import { BasketComponent } from './components/main/basket/basket.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemInfoComponent } from './components/main/item-card/item-info/item-info.component';
import { HomeComponent } from './components/main/home/home.component';


import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './components/main/home/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AsideComponent,
    ItemCardComponent,
    StoreComponent,
    BasketComponent,
    ItemInfoComponent,
    HomeComponent,
    PostComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
