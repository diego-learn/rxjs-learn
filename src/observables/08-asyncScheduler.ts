/***
 * asyncScheduler
 * consiste em agendar ejecuciones de funciones
 *
 * **/
import {asyncScheduler} from "rxjs";


const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);


asyncScheduler.schedule(saludar, 5000);
asyncScheduler.schedule(saludar2, 2000, 'Diego');


/***
 * asyncScheduler
 * aqui executamos um metodo agendado realmente, 
 *
 * **/
const subs = asyncScheduler.schedule(function (state: number) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);


setTimeout(() => {
    subs.unsubscribe();
}, 6000);
