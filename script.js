// prima parte
var studente = {
    nome: "Andrea",
    cognome: "Lega",
    eta: 26
};
for (key in studente) {
    document.getElementById("myP1").innerHTML += key + ": " + studente[key] + "<br>";
};

// seconda parte
var studenti = [
    {
        nome: "Gianni",
        cognome: "Sperti",
        eta: 20
    },
    {
        nome: "Lucenzo",
        cognome: "Stello",
        eta: 26
    },
    {
        nome: "Maurilio",
        cognome: "Efesto",
        eta: 34
    }
];
for (var i = 0; i < studenti.length; i++) {
    for (arrKey in studenti[i]) {
        document.getElementById("myP2").innerHTML += arrKey + ": " + studenti[i][arrKey] + "<br>";
    }
};

// terza parte
var tempStudente = {
    nome: "",
    cognome: "",
    eta: 0
};
for (addKey in tempStudente) {
    tempStudente[addKey] = prompt("Inserire " + addKey + " del nuovo studente:");
};
studenti.push(tempStudente);
for (var i = 0; i < studenti.length; i++) {
    for (arrKey in studenti[i]) {
        document.getElementById("myP3").innerHTML += arrKey + ": " + studenti[i][arrKey] + "<br>";
    }
};