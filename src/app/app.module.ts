import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoxOfDonutsComponent } from './box-of-donuts.component';
import { DonutComponent } from './donut.component';

@NgModule({
  declarations: [AppComponent, DonutComponent, BoxOfDonutsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
