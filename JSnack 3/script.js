//Chiedi all'utente un numero di 4 cifre
//Fai la somma di tutte le cifre del numero

let numero = document.getElementById('numeroUtente');

let userNumber = prompt('Inserisci un numero di 4 cifre');

let somma = 0;

const cifre = userNumber.split("");

let index = 0;

while(index < 4){
    somma += parseInt(cifre[index]);
    index++;
}

numero.innerHTML = `La somma delle cifre del numero inserito è: ${somma}`;