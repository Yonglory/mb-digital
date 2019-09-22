import { Component } from '@angular/core';
import { global } from './global.service';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mb-digital';
  isalive = true;
  bagValue: any;
  constructor(public global: global) {
  }
  ngOnInit() {
    this.global.bagValue.pipe(
      takeWhile(s => this.isalive)
    )
      .subscribe(value => {
        this.bagValue = value
        // console.log(this.bagValue)

      });
  }
}
