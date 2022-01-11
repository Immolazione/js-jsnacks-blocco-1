console.log('JS OK');

/* SNACK 2
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord = prompt('Scrivi la prima parola').trim();
console.log(firstWord);

const secondWord = prompt('Scrivi la seconda parola').trim();
console.log(secondWord);

let solution = `'${firstWord}' e '${secondWord}' sono della stessa lunghezza`;

//VALIDAZIONE
if (firstWord.length === 0 || secondWord.length === 0) {
    solution = 'Una delle due parole non è valida!'
} else {
//COMPARAZIONE
    if (firstWord.length > secondWord.length) {
        solution = `${secondWord}, ${firstWord}`;
        console.log(solution);
    } else if (firstWord.length < secondWord.length){
        solution = `${firstWord}, ${secondWord}`;
        console.log(solution);
    }
}

document.getElementById('display').innerHTML = solution;

