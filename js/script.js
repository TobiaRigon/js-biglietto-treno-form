let sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function() {
    // Chiedi km da percorrere
    const distanza = document.getElementById("distanza").value;
    console.log(distanza);

    // Chiedi età
    const eta = document.getElementById("eta").value;
    console.log(eta);

    // Calcola tariffa base
    const prezzoKm = 0.21;
    let tariffaFinale = "";
    const tariffaBase = distanza * prezzoKm;

    // Calcola tariffe scontate
    // (prezzoKm per distanza-20%if minorenne)(prezzoKm per distanza-40% else if over65)(prezzoKm per distanza else)
    if (eta < 18) {
        tariffaFinale = tariffaBase - (tariffaBase * 0.2);
    } else if (eta > 65) {
        tariffaFinale = tariffaBase - (tariffaBase * 0.4);
    } else {
        tariffaFinale = tariffaBase;
    }

    // Arrotonda tariffa finale
    tariffaFinale = tariffaFinale.toFixed(2);

    // Mostra tariffa
    document.getElementById('ticket').innerHTML = ` Il totale è di: ${tariffaFinale} § `;
});


