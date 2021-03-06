// Affiche les périodes
function afficherPeriodes(reponse) {
    var NbTr = reponse.data.periodes.length;
    console.log("NbTr: "+NbTr)

    // Pour les semestres
    if (NbTr == 3) {
        var coche = document.createElement("input");
        coche.type = "radio";
        coche.id = "tr" + (NbTr - 1);
        coche.name = "Trimestre";
        document.body.appendChild(coche);

        var p = document.createElement("no");
        p.innerText = "Toute l'année";
        document.body.appendChild(p);

        var retourLigne = document.createElement("br");
        document.body.appendChild(retourLigne);

        for (i = 1; i < NbTr; i++) {
            var coche = document.createElement("input");
            coche.type = "radio";
            coche.id = "tr" + (i - 1);
            coche.name = "Trimestre";

            document.body.appendChild(coche);

            var p = document.createElement("no");
            p.innerText =  "Semestre n°"+(i);
            document.body.appendChild(p);

            var retourLigne = document.createElement("br");
            document.body.appendChild(retourLigne);
        }
    }

    // Pour les trimestres
    if (NbTr == 4) {
        var coche = document.createElement("input");
        coche.type = "radio";
        coche.id = "tr" + (NbTr - 1);
        coche.name = "Trimestre";
        document.body.appendChild(coche);

        var p = document.createElement("no");
        p.innerText = "Toute l'année";
        document.body.appendChild(p);

        var retourLigne = document.createElement("br");
        document.body.appendChild(retourLigne);

        for (i = 1; i < NbTr; i++) {
            var coche = document.createElement("input");
            coche.type = "radio";
            coche.id = "tr" + (i - 1);
            coche.name = "Trimestre";
            document.body.appendChild(coche);

            var p = document.createElement("no");
            p.innerText = "Trimestre "+(i);
            document.body.appendChild(p);

            var retourLigne = document.createElement("br");
            document.body.appendChild(retourLigne);
        }
    }

    // Cochage de la case adéquate
    document.getElementById("tr"+tr).checked = true;

    console.log("Periodes affichées !");
}