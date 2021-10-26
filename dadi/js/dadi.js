// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERO UN NUMERO RANDOM DA 1 A 6 PER L'USER e PER IL PC
let userNumber = Math.floor(Math.random() * 6) + 1;
let pcNumber = Math.floor(Math.random() * 6) + 1;
let risultatoDado = "Parità";

console.log(userNumber);
console.log(pcNumber);

// CONDIZIONI SVILUPPO ESERCIZIO
if (userNumber > pcNumber) {
    risultatoDado = alert("Complimenti, hai vinto TU!");
}else if (userNumber < pcNumber) {
    risultatoDado = alert("Mi dispiace, il PC ha vinto!");
};

console.log(risultatoDado);