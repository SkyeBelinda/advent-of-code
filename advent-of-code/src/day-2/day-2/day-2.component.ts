import { Component, OnInit } from '@angular/core';
import { day2Input } from './day-2-input';
import { of, from } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-day-2',
    templateUrl: './day-2.component.html'
})
export class Day2Component implements OnInit {
    public checkSumResult = 0;

    ngOnInit (): void {
    function countEachLetter(line: string): boolean[] {
        const letters = line.split('');
        const counter = {};
        letters.forEach(letter => {
            counter[letter] = counter[letter] || 0;
            counter[letter]++;
        });

        const counts = Object.keys(counter).map(key => counter[key]);

        const hasDouble = counts.indexOf(2) >= 0;
        const hasTriple = counts.indexOf(3) >= 0;

        return [hasDouble, hasTriple];
    }
        let doubles = 0;
        let triples = 0;
        const dataStream = of(day2Input).pipe(
            map(input => input.split('\n')),
            mergeMap(arr => from(arr)),
        );

        const result = dataStream.pipe(
            map(line => countEachLetter(line)),
            tap(([hasDouble, hasTriple]) => {
                doubles += hasDouble ? 1 : 0;
                triples += hasTriple ? 1 : 0;
            })
        );

        result.subscribe(
            null,
            () => {
                  this.checkSumResult = doubles * triples,
                  console.log('RESULT:', doubles * triples);
            }
        );
    }
}
