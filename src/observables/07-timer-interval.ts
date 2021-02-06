import {fromEvent, interval, of, range, timer} from "rxjs";

const agora = new Date();
agora.setSeconds(agora.getSeconds() + 5);

/**
* Interval
* **/
const src$ = interval(1000);
// const src2$ = timer(2000, 2000);

///acrecentando um uma data para progrmando assim um horario para executar
const src2$ = timer(agora, 2000);

src2$.subscribe(console.log);
