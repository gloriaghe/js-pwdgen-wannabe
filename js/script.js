// chiedi nome

const tuoNome = prompt("Come ti chiami?");

console.log(tuoNome);

//chiedi cognome

const tuoCognome = prompt("Qual è il tuo cognome?")

console.log(tuoCognome);

//chiedi colore preferito

const colorePreferito = prompt("Qual'è il tuo colore preferito?")

console.log(colorePreferito);

//genera password "nomecognomecolorepreferito21"

document.getElementById("my-password").innerHTML= `${tuoNome}${tuoCognome}${colorePreferito}21` 