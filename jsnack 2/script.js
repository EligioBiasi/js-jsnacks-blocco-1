// Snack 2:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby

 const listName = ['Pippo', 'john', 'Lucio', 'francesco', 'Luigi', 'Mario', 'Vincenzo', 'Topolino'];

// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nameAdded = prompt('inserisci il tuo nome');

let isNameFound = false;

for(i=0;i<listName.length;i++){
    if(listName[i]===nameAdded){
        isNameFound=true;
    }
}

if(isNameFound){
    console.log('sei invitato')
}else{
    console.log('non sei invitato')
}