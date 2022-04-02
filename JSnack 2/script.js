//Creare un array vuoto
//Chiedere all'utente di inserire 6 numeri
//Se uno di questi è dispari, inserirlo nell'array

let list = [];
let numeriDispari = document.getElementById('dispari');

for(let i = 0; i < 6; i++){
    number = parseInt(prompt('Inserisci un numero'));
    if (number % 2 !== 0){
        list.push(number)
    }
}
numeriDispari.innerHTML = `I numeri dispari trovati sono: ${list.join(', ')}`