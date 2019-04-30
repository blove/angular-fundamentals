import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.interface';
import { environment } from '../../environments/environment';
import data from '../data/donuts.json';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  // todo: inject the HttpClient instance
  constructor() {}

  getAll(): Donut[] {
    // todo: refactor to use the HttpClient.get() method
    return JSON.parse(window.localStorage.getItem(environment.storage.donuts));
  }

  // todo: remove
  populate(): void {
    const value = window.localStorage.getItem(environment.storage.donuts);
    if (!value) {
      window.localStorage.setItem(
        environment.storage.donuts,
        JSON.stringify(data)
      );
    }
  }

  save(donut: Donut): void {
    // todo: refactor to use the HttpClient.put() method
    const donuts = this.getAll();
    const index = donuts.findIndex(d => d.id === donut.id);
    donuts[index] = donut;
    window.localStorage.setItem(
      environment.storage.donuts,
      JSON.stringify(donuts)
    );
  }
}
