import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  // todo: inject the DonutService
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // get donuts from local storage
    this.donuts = JSON.parse(
      window.localStorage.getItem(environment.storage.donuts)
    );

    // get the id parameter
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // get the donut to edit/fry
    this.donut = this.donuts.find(donut => donut.id === Number(id));
  }

  onSave(donut: Donut) {
    const index = this.donuts.findIndex(d => d.id === donut.id);
    this.donuts[index] = donut;

    // todo: use the DonutService.save() method to persist the data
    window.localStorage.setItem(
      environment.storage.donuts,
      JSON.stringify(this.donuts)
    );
    this.router.navigateByUrl('/');
  }
}
