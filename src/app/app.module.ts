import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutComponent } from './components/donut/donut.component';
import { BoxOfDonutsComponent } from './components/box-of-donuts/box-of-donuts.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { DonutWallComponent } from './components/donut-wall/donut-wall.component';
import { DonutShopComponent } from './containers/donut-shop/donut-shop.component';
import { KitchenComponent } from './containers/kitchen/kitchen.component';

const routes: Route[] = [
  {
    path: 'donut-shop',
    component: DonutShopComponent
  },
  {
    path: 'kitchen/:id',
    component: KitchenComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'donut-shop'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BoxOfDonutsComponent,
    DonutComponent,
    DonutFormComponent,
    DonutShopComponent,
    DonutWallComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
