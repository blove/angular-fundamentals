import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private readonly BASE_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Array<Donut>> {
    return this.httpClient.get<Array<Donut>>(`${this.BASE_URL}donuts`);
  }

  save(donut: Donut): void {
    this.httpClient.put(`${this.BASE_URL}donuts/${donut.id}`, donut);
  }
}
