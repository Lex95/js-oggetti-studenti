// prima parte
var studente = {
    nome: "Andrea",
    cognome: "Lega",
    eta: 26
}
for (key in studente) {
    document.getElementById("myP1").innerHTML += key + ": " + studente[key] + "<br>";
}

// seconda parte