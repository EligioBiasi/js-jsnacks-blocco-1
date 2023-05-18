// Snack 4:
// Chiedi un numero di 4 cifre all’utente

const insertNumber = prompt('inserisci un numero a 4 cifre');

// e calcola la somma di tutte le cifre che compongono il numero.

if(insertNumber.length==4){
    let sum = 0
    for(i=0;i<insertNumber.length;i++){
        sum+=parseInt(insertNumber[i]);
    }
    console.log(sum);
}else{
    console.log('numero non valido, inserisci 4 numeri');
}


