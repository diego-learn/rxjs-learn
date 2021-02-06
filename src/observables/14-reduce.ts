import {interval, pipe} from "rxjs";
import {reduce, take, tap} from "rxjs/operators";


/****
 *
 * REDUCE
 * operador que funciona igual ao reduce de javaScript
 * que permite reducir as quantidades de emisiones em so uma que totaliza os valores
 * ****/

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}


interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
        next: val => console.log('next:', val)
    }
)
