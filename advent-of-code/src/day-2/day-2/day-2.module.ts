import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day2Component } from './day-2.component';
import { Day2Part2Component } from './day-2-part-2.component';

@NgModule({
  declarations: [
    Day2Component,
    Day2Part2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Day2Component,
    Day2Part2Component
  ],
  bootstrap: [
    Day2Component,
    Day2Part2Component
  ]
})
export class Day2Module { }
