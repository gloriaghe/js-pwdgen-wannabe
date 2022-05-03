// nome iniziale

const tuoNome = prompt("Ciao, come ti chiami?");

console.log(tuoNome);

document.getElementById("ilTuoNome").innerHTML= `${tuoNome}`


function myFunction() {
// // chiedi personaggio

const personaggio = prompt("Qual'è il tuo personaggio preferito?");

console.log(personaggio);

// //chiedi animale magico

const animale = prompt("Qual è il tuo animale magico?");

console.log(animale);

// //chiedi numero preferito

const numeroPreferito = prompt("Qual'è il tuo numero preferito?");

console.log(numeroPreferito);
};

// //genera password "nomecognomecolorepreferito21"

document.getElementById("MYpassword").innerHTML= `La tua password è ${personaggio}${animale}${numeroPreferito}21` ;