import { Component, OnInit } from '@angular/core';
import { day2Input } from './day-2-input';
import { of, from, Observable, zip } from 'rxjs';
import { map, mergeMap, tap, filter, toArray, distinct } from 'rxjs/operators';

@Component({
    selector: 'app-day-2-part-2',
    templateUrl: './day-2-part-2.component.html'
})
export class Day2Part2Component implements OnInit {
    public stringAnswer = 'hi';

    ngOnInit() {

        // get the input as an observable
        const boxNames: Observable<string> = of(day2Input).pipe(
            map(input => input.split('\n')),
            mergeMap(arr => from(arr)),
        );

        // find the answer
        const result = boxNames.pipe(

            // compare all names to all other names
            mergeMap(currentBox =>
                boxNames.pipe(

                    // pair every box with every other box
                    map(otherBox => [currentBox, otherBox]),

                    // map to an observable which zips the two names
                    map(([firstBox, otherBox]) =>
                        zip(
                            from(firstBox.split('')),
                            from(otherBox.split(''))
                        )
                    ),

                    // merge the zipped names back into the stream
                    // as a single result, which is the string found
                    // by retaining all matching letter pairs found
                    // in the two names.
                    mergeMap(nameZip =>

                        // nameZip produces pairs [a,b] for each index
                        // in the two box names being compared
                        nameZip.pipe(
                            // only keep pairs where both letters are the same
                            filter(([a, b]) => a === b),
                            // keep just one letter from the matching pair
                            map(([a, b]) => a),
                            // capture all the letters as an array
                            toArray(),
                            // join that array back into a box name
                            // which will not contain the non-matching letter
                            map(letters => letters.join(''))
                        )
                    ),

                    // keep only results where a single letter has been removed
                    // by comparing the shortened box name to the original box name
                    filter(shortName => shortName.length == currentBox.length - 1),

                ),

            ),

            // only match once for a pair
            distinct(),

        );

        // log the result
        result.subscribe(x => {
            console.log('RESULT2:', x),
            this.stringAnswer = x;
        });

    }
}
