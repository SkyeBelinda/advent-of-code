import { Component, OnInit } from '@angular/core';
import { input } from './input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'advent-of-code';
  result: number;

  ngOnInit(): void {
    this.getTheStartingFrequency();
  }

  public getTheStartingFrequency() {
    const formatToArrayPart1 = input.split('\n').map(Number);
     console.log(formatToArrayPart1);
    this.result = formatToArrayPart1.reduce((prev, frequency) => prev + frequency, 0);
  }
}
