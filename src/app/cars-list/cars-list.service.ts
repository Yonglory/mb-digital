import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('assets/mocks/listHero.json');
  }
}
