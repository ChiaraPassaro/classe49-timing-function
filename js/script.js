// setTimeout(myFunction, 3000); //stampa dopo 3 secondi

// console.log('Ciao');//viene stampato per primo


// function myFunction() {
//   console.log('Ciao Asincrono');
// }


// setTimeout(myFunction, 3000);

// console.log('Ciao');
// console.log('Ancora un evento sincrono');



// function myFunction() {
//   console.log('Ciao Asincrono');
// }


// let numero = 0;
// setTimeout(myFunction, 3000);

// function myFunction() {
//   numero = 20;
// }

// console.log(numero);


// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().
// const seconds = parseInt(prompt('inserisci il numero dei secondi'));

// setTimeout(cookPasta, seconds * 1000); 
// setTimeout(cookPasta, seconds * 1000);

// function cookPasta() {
//   alert('La pasta è pronta');
// }

// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
// let seconds = 10;

// const timer = setInterval(() => { //function arrow anonime
//   console.log('primo interval', this);
//   if (seconds > 0) {
//     console.log('secondi timer', seconds);
//     seconds -= 1;
//   } else {
//     console.log('Buon Anno!!!');
//     clearInterval(timer);
//   }
// }, 1000);

// console.log('primo timer id sicrono', timer);


// const set2 = setInterval(function () { //function anonima
//   //console.log('seconto interval', this);
//   // console.log('secondo timer id setinterval', set2);
// }, 1000);



// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

const start = document.getElementById('primo');
const stop = document.getElementById('secondo');

// start.addEventListener('click', function () {
//   
//   let seconds = 0;

//   const timer = setInterval(() => {
//     console.log(seconds);
//     seconds += 1;
//   }, 1000);

//   stop.addEventListener('click', function () {
//     clearInterval(timer);
//   });
// });

start.addEventListener('click', myTimer);

function myTimer() {
  this.removeEventListener('click', myTimer);
  let seconds = 0;

  const timer = setInterval(() => {
    console.log(seconds);
    seconds += 1;
  }, 1000);

  stop.addEventListener('click', function () {
    clearInterval(timer);
    this.addEventListener('click', myTimer);
  });
}

