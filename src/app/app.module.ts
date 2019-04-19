import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoxOfDonutsComponent } from './box-of-donuts.component';
import { DonutWallComponent } from './donut-wall.component';
import { DonutComponent } from './donut.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    BoxOfDonutsComponent,
    DonutWallComponent
  ],
  imports: [BrowserModule], // import FormsModule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
