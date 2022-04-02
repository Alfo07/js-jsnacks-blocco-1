//Creare un array con i nomi degli invitati alla festa
//Comunicargli se può partecipare o no alla festa

const listaInvitati = ['Antonio',
'Will', 'Brad', 'Leonardo', 'Johnny', 'Margot', 'Bradley', 'Tom', 'Silvester', 'George'];

let userName = prompt('Quale è il Suo nome?');

let contenitore = document.getElementById('invitati');

let index = 0;

let presente = false;

while (!presente && index != listaInvitati.length){

    if (userName === listaInvitati[index]) {
        presente = true;
    }
    
    index++;
};
      
if (presente){
    contenitore.innerHTML = `Salve ${userName}, Le diamo il benvenuto alla festa.`;
} else {
    contenitore.innerHTML = `Mi dispiace ${userName}, Lei non è presente sull'elenco, non possiamo farla entrare`;
} ;

    