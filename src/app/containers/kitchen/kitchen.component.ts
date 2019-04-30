import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from 'src/app/models/donut.interface';
import { DonutService } from 'src/app/services/donut.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private donutService: DonutService,
    private router: Router
  ) {}

  ngOnInit() {
    // get donuts from local storage
    this.donuts = this.donutService.getAll();

    // get the id parameter
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // get the donut to edit/fry
    this.donut = this.donuts.find(donut => donut.id === Number(id));
  }

  onSave(donut: Donut) {
    this.donutService.save(donut);
    this.router.navigateByUrl('/');
  }
}
