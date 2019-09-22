import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile, catchError } from 'rxjs/operators';
import { CarsListService } from './cars-list.service';
import { global } from '../global.service';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, OnDestroy {
  carsList;
  isalive = true;
  searchText;
  constructor(private carsListService: CarsListService, public global: global) { }

  ngOnInit() {
    this.carsListService.getCars().pipe(
      takeWhile(s => this.isalive)
    ).subscribe((result: any) => {
      result.map(v => {
        v.price.show = true;
        v.name = v.modelClass + " " + v.version;
      });
      this.carsList = result;
      console.log(this.carsList)
      this.global.bagValue.next({ price: 0, currency: this.carsList[0].price.currency, locale: this.carsList[0].price.locale });

    });

  }
  ngOnDestroy(): void {
    this.isalive = false;
  }
  addToBag(selectedCar) {
    selectedCar.show = !selectedCar.show;
    const currentValue = +this.global.bagValue.value.price + +selectedCar.amount;
    console.log(currentValue)
    this.global.bagValue.next({ price: currentValue, currency: selectedCar.currency, locale: selectedCar.locale });
  }
  removeFromBag(selectedCar) {
    selectedCar.show = !selectedCar.show;
    const currentValue = this.global.bagValue.value.price - selectedCar.amount;
    console.log(currentValue)
    this.global.bagValue.next({ price: currentValue, currency: selectedCar.currency, locale: selectedCar.locale });
  }
}
