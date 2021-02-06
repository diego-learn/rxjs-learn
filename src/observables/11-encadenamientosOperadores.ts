import {from, fromEvent, of, range} from "rxjs";
import {filter, map} from "rxjs/operators";

/***
 *
 * encadenamiento de operadores es posible gracias al .pipe()
 * ele permitira colocar varios operadores secuencialmente para la exitosa ejecucion
 *
 * ****/
const up$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code ), // aqui o map va a separar el objeto KeyboardEvent para retornarlo al filter
    filter(key => key === 'Enter')// aqui o filter vai pegar o resultado do map ejecutado en la linea superior
);


up$.subscribe(console.log);
