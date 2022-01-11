console.log('JS OK');

/* SNACK 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

const pageResult = document.getElementById('display');

const firstNumber = parseInt(prompt('Scegli il primo numero').trim());
console.log(firstNumber);

const secondNumber = parseInt(prompt('Scegli il secondo numero').trim());
console.log(secondNumber);

let result = (`${firstNumber} e ${secondNumber} sono uguali!`);

if (firstNumber > secondNumber) {
    result = (`Il numero più grande è ${firstNumber}!`);
} else if (firstNumber < secondNumber) {
    result = (`Il numero più grande è ${secondNumber}!`);
}

pageResult.innerHTML = `${result}`;
