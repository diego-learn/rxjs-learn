import {from, of, range} from "rxjs";
import {filter} from "rxjs/operators";


const obj$ = range( 1, 10);



obj$.pipe(
    filter( value => value !== 2 )
).subscribe(console.log);



const personajes = [
    {
        tipo: 'heroe',
        nomber: 'Batman'
    },
    {
        tipo: 'heroe',
        nomber: 'Robin'
    },
    {
        tipo: 'villano',
        nomber: 'Joker'
    }
]

const pesonajes$ = from(personajes)

pesonajes$.pipe(
    filter(per => {
        return per.tipo === 'villano'
    })
).subscribe(console.log)
