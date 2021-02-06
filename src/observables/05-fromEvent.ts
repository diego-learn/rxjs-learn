import {fromEvent, of} from "rxjs";



//eventos del dom

const src1$ = fromEvent<MouseEvent>(document, 'click');

const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: val => console.log('next', val)

};

src1$.subscribe(({x}) => {
    console.log(x);
});
src2$.subscribe(event => {
    console.log(event.key);
});
