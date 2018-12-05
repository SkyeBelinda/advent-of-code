import { Component, OnInit } from '@angular/core';
import { day4Input } from './day-4.input';

@Component({
    selector: 'app-day-4',
    templateUrl: './day-4.component.html'
})
export class Day4Component implements OnInit {

ngOnInit() {

    const formatInput = day4Input.split('\n');
    const memo = new Map();
    const guards = {};

    const logs = formatInput.filter(Boolean).map(i => {
        const [, date, hour, minute, comment] = i.match(/\[([\d-]+) (\d+):(\d+)\] (.*)/);
        return { date, hour, minute, comment };
    });
}
}
