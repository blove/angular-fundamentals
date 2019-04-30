import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/models/donut.interface.js';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donut-shop',
  templateUrl: './donut-shop.component.html',
  styleUrls: ['./donut-shop.component.css']
})
export class DonutShopComponent implements OnInit {
  /** The donuts for the donut wall. */
  donuts: Donut[];

  /** The donuts selected for the box. */
  selectedDonuts: Donut[] = [];

  // todo: inject the DonutService
  constructor(private router: Router) {}

  ngOnInit() {
    // todo: use the DonutService.getAll() method
    this.donuts = JSON.parse(
      window.localStorage.getItem(environment.storage.donuts)
    );
  }

  onEdit(donut: Donut): void {
    this.router.navigate(['/kitchen', donut.id]);
  }

  onRemove(donut: Donut): void {
    const index = this.donuts.findIndex(d => d.name === donut.name);
    if (index === -1) {
      return;
    }

    this.donuts.splice(index, 1);
  }

  onSelect(donut: Donut): void {
    this.selectedDonuts = [...this.selectedDonuts, donut];
  }
}
