console.log('JS OK');

/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0; 
let isValid = true;

for (let i = 0; i < 3; i++) {
    const number = parseInt(prompt('Scrivi un numero').trim());
    if (isNaN(number)) {
        isValid = false;
    } else {    
        sum += number;
    }
}

if (isValid) {
    console.log(`La sommma finale è : ${sum}`);
} else {
    console.log('Hai inserito dei valori non validi!');
}
