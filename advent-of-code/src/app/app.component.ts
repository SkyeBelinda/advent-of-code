import { Component, OnInit } from '@angular/core';
import { input } from './input';
import { of, from } from 'rxjs';
import { map, reduce, mergeMap, tap, scan, first, pairwise, take, repeat, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'advent-of-code';
  public result1 = 0;
  public result2 = 0;
  public formatToArrayPart1 = input.split('\n').map(Number);

  ngOnInit(): void {
    this.getTheStartingFrequency();
    this.getTheFirstRepeatedNumber();
  }

  public getTheStartingFrequency() {
    const formatToArrayPart1 = input.split('\n').map(Number);
    this.result1 = formatToArrayPart1.reduce((prev, frequency) => prev + frequency, 0);
  }

  public getTheFirstRepeatedNumber() {
    const dataStream = of(input).pipe(
      repeat(),
      map(item => item.split('\n')),
      mergeMap(arr => from(arr)),
      // tslint:disable-next-line:radix
      map(val => parseInt(val)),
    );

    const values = [0];

    const part2 = dataStream.pipe(
      scan((acc, val) => {
        acc += val;
        const duplicate = values.indexOf(acc) >= 0;
        if (duplicate) {
          throw new Error(`${acc}`);
        }
        return acc;
      }, 0),
      tap(value => values.push(value)),
    );

    part2.subscribe(
      null,
      e => {
        return console.log('FOUND', e.message),
        this.result2 = e.message;
      });
  }
}
