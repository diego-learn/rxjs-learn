import {fromEvent, of, range} from "rxjs";


/**
* RANGE
* **/
const src$ = range(1, 100);

src$.subscribe(console.log);
