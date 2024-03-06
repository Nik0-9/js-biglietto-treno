/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

let km = (prompt('Inserire il numero di chilometri da percorrere:'));
let age = parseInt(prompt("Inserire l'età del passeggero:"));
let price = km * 0.21;


if(!isNaN(km) && !isNaN(age)){
    if(age < 18){
        price = price - (price * 20 / 100);
        document.getElementById('ticket').innerHTML = `il prezzo del biglietto è di: ${price.toFixed(2)} euro`;
    } else if(age >= 65){
        price = price - (price * 40 / 100);
        document.getElementById('ticket').innerHTML = `il prezzo del biglietto è di: ${price.toFixed(2)} euro`;
    } else{
        document.getElementById('ticket').innerHTML = `il prezzo del biglietto è di: ${price.toFixed(2)} euro`;
    }
} else {
    document.getElementById('ticket').innerHTML = 'non hai inserito un numero nel campo chilometri oppure età';
    
}
