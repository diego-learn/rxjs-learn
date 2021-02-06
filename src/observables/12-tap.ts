import {from, fromEvent, of, range} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

/***
 *TAP
 * é um operador que permite monitorar os dados do fluxo do subscriber
 * é comun utilizar um console.log para monitorar o valor que se encontra nesse momento  do fluxo onde se encontre
 *
 * ****/
const up$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code ),
    tap(console.log),
    filter(key => key === 'Enter')
);


up$.subscribe(console.log);
