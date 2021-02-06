import {fromEvent, of} from "rxjs";
import {map} from "rxjs/operators";


const obs$ = of(1,2,3,4,5,6,7);



/**
 *MAP
 * **/

obs$.pipe(
    map( va => {
        return  va
    })
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map( e => {
        return {codigo: e.key}
    } )).subscribe(console.log)


export interface v {
    id?: number,
    text?: string
}
