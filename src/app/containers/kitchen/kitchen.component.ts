import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/models/donut.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  /** The donut that we are editing/frying. */
  donut: Donut;

  /** The donuts in the shop. */
  private donuts: Donut[];

  // todo: inject the ActivatedRoute instance
  constructor() {}

  ngOnInit() {
    // get donuts from local storage
    this.donuts = JSON.parse(
      window.localStorage.getItem(environment.storage.donuts)
    );

    // todo: get the id parameter

    // todo: get the donut to edit/fry
    // this.donut = this.donuts.find(donut => donut.id === Number(id));
  }

  onSave(donut: Donut) {
    const index = this.donuts.findIndex(d => d.id === donut.id);
    this.donuts[index] = donut;
    window.localStorage.setItem(
      environment.storage.donuts,
      JSON.stringify(this.donuts)
    );
  }
}
