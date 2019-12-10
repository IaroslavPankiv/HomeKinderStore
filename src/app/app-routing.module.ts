import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasketComponent} from "./components/main/basket/basket.component";
import {StoreComponent} from "./components/main/store/store.component";
import {ItemInfoComponent} from "./components/main/item-card/item-info/item-info.component";
import {HomeComponent} from "./components/main/home/home.component";
import {PostComponent} from "./components/main/home/post/post.component";
import {HistoryComponent} from "./components/main/history/history.component";



const routes: Routes = [
  {path:'basket', component: BasketComponent},
  {path:'store', component: StoreComponent},
  {path:'store/itemInfo', component: ItemInfoComponent},
  {path:'home', component: HomeComponent},
  {path:'home/post', component: PostComponent},
  {path:'history', component: HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
