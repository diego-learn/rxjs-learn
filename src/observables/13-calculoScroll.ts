import {from, fromEvent, of, range} from "rxjs";
import {filter, map, tap} from "rxjs/operators";

/***
 *
 *calculando a porcentaje de um scroll
 *
 * ****/


const index = document.createElement('div');

index.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate diam, quis convallis leo. Mauris arcu magna, congue eget aliquet nec, consectetur vel tellus. Duis commodo ante magna, quis tempus velit vehicula vitae. Cras hendrerit, felis a ultrices aliquet, enim turpis facilisis neque, nec sagittis tortor massa vitae elit. Duis maximus est sem, et pharetra tortor rutrum rutrum. Etiam dapibus turpis non dui sodales semper. Donec enim nunc, porta quis dictum id, ullamcorper sit amet quam. In sit amet urna in odio porttitor tempor vitae non purus. Maecenas convallis pharetra suscipit. Sed efficitur convallis ipsum sed luctus. Nulla non vestibulum velit. Aenean mi justo, ultricies et scelerisque quis, tempor eu metus. Duis sagittis diam in ipsum finibus, ac volutpat nulla efficitur. Etiam non iaculis justo, at venenatis erat. Nullam magna nisl, facilisis et tempor id, convallis interdum magna. Fusce elementum, elit eu volutpat ornare, lorem dolor mattis lectus, vitae mattis diam lorem sed neque.
<br></br>
Integer a elit a arcu dictum congue ut vitae ante. Fusce arcu risus, sodales quis nibh vel, consequat sodales arcu. Morbi tristique vehicula arcu, a volutpat nibh dapibus interdum. Proin varius felis condimentum nunc aliquet, sed elementum lacus vestibulum. Cras purus erat, ultrices sit amet suscipit nec, tempor non lectus. Quisque pharetra ipsum vitae magna tincidunt, nec mollis felis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br></br>
In sed mi faucibus, tincidunt lorem eu, vestibulum felis. Ut rhoncus mauris id sem pretium sagittis. Suspendisse sagittis eleifend lacus et commodo. Pellentesque blandit ut eros ac euismod. Sed id metus in lacus cursus rutrum et ut orci. Sed eleifend tellus felis, ac tincidunt purus dictum in. In hac habitasse platea dictumst. Maecenas consectetur dui in porttitor tristique. Duis volutpat massa id sodales vehicula. Suspendisse potenti.
<br></br>
Sed nibh dui, tempus non vehicula a, lobortis nec dolor. In eleifend dui neque, quis convallis mi congue in. Nunc tempus ex magna, sit amet efficitur odio accumsan non. Vivamus sed est velit. Duis vehicula nunc eu ex cursus dapibus. Fusce efficitur eget nulla sit amet pellentesque. Integer et egestas nisi, id cursus arcu. Donec consectetur ante vel magna feugiat blandit eu ac sem. Morbi quis pretium augue. Praesent porta, neque non laoreet euismod, odio mi tempus lorem, eget interdum dui dolor non quam. Nam vitae feugiat lectus, nec sodales dui. Duis vel nunc mi. Sed eu dapibus sapien.
<br></br>
In tristique, justo interdum commodo pulvinar, nisi purus elementum sapien, ut ornare ipsum augue eget tellus. Nulla nec mollis odio. Vivamus ultrices varius risus, id interdum turpis faucibus sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id ultrices felis. Fusce maximus arcu pharetra nibh consequat gravida egestas ac odio. Sed porttitor lacinia porttitor. Sed vehicula mi nunc, nec consectetur purus bibendum a. Sed a venenatis quam. Pellentesque finibus eros mauris. `


const calculaPorcentageScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement

    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

const body = document.querySelector('body');

body.append(progressBar)
body.append(index);

const scroll$ = fromEvent(document, 'scroll')

const progress$ = scroll$.pipe(
    map(event  => calculaPorcentageScroll(event),)

);

progress$.subscribe(porecentaje => {
    progressBar.style.width = `${ porecentaje }%`;
});
