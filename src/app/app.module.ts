import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import localeDe from '@angular/common/locales/de';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterCarPipe } from './filter-car.pipe';
// the second parameter 'de' is optional
registerLocaleData(localeDe);
@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    FilterCarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
