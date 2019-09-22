import { Injectable } from '@angular/core';
import * as Rx from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class global {
    bagValue = new Rx.BehaviorSubject({
        price: 0, currency: "", locale: ""
    });
    nofilterdata = false;
}