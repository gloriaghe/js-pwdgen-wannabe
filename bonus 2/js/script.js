// nome iniziale

const tuoNome = prompt("Ciao, sono il tuo generatore automatico di password del mondo di Harry Potter....Cominciamo???? Intanto dimmi come ti chiami!");

console.log(tuoNome);

document.getElementById("ilTuoNome").innerHTML= `${tuoNome}`


// // chiedi personaggio

const personaggio = prompt("Ora la prima domanda... Qual'è il tuo personaggio preferito?");

console.log(personaggio);

// //chiedi animale magico

const animale = prompt("E il tuo animale magico qual è?");

console.log(animale);

// //chiedi numero preferito

const numeroPreferito = prompt("Per finire dimmi il tuo numero preferito!");

console.log(numeroPreferito);


// //genera password "nomecognomecolorepreferito21"

document.getElementById("MYpassword").innerHTML= `La tua password è: ${personaggio}${animale}${numeroPreferito}21` ;