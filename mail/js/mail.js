// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
// VARIABILI
const emailFestino = ["ciao@gmail.com", "benvenuto@gmail.com", "festa@gmail.com", "pippo@gmail.com"];
let emailUser = prompt("Inserisco la tua email");
let emailTrovata = false;
let festaOrg = document.getElementById("festa");


// ESECUZIONE ESERCIZIO
// CONDIZIONI E CICLO
for (let i = 0; i < emailUser.length; i++) {
    if (emailUser === emailFestino[i]) {
        emailTrovata = true;
    }
}

// CONDIZIONI SE EMAIL è CONTENUTA ALL'INTERNO DELL'ARRAY
if (emailTrovata == true) {
    festaOrg.innerHTML = ("Sei il benvenuto alla festa");
} else {
    festaOrg.innerHTML = ("Mi dispiace ma non sei invitato alla festa!!!");
}