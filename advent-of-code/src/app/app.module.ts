import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day2Module } from 'src/day-2/day-2/day-2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Day2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
