import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { ItemsViewComponent } from './items-view/items-view.component';


const routes: Routes = [
  { path: '',   component: HomeViewComponent, pathMatch: 'full' }, 
  { path: 'items/:category', component: ItemsViewComponent },
  { path: '**', component: HomeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
