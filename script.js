// SVOLGIMENTO ESERCIZIO


let priceKm = 0.21;
let passengerAge = parseInt(prompt('Inserisci la tua età'));
let passengerKm = parseInt(prompt('Inserisci i KM che vuoi percorrere'));
let cost = priceKm * passengerKm;
let finalCost;

if (passengerAge <= 17) {
	finalCost = cost - (cost * 20) / 100;
} 
else if (passengerAge >= 65) {
	finalCost = cost - (cost * 40) / 100;
}
else {
	finalCost = cost;
}



console.log('Il costo del tuo viaggio è di €', finalCost);
