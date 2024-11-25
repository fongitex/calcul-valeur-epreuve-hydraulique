function calculerEpreuve() {
    const pression = parseFloat(document.getElementById('pression').value);
    let epreuveInitiale, reepreuve, reepreuveReparation;

    // Calcul de l'épreuve initiale
    if (pression <= 0.5) {
        if (pression >= 1 / 3) {
            epreuveInitiale = pression + 0.5;
        } else {
            epreuveInitiale = "Hors intervalle";
        }
    } else if (pression <= 6) {
        epreuveInitiale = pression * 2;
    } else if (pression <= 12) {
        epreuveInitiale = pression + 6;
    } else {
        epreuveInitiale = pression * 1.5;
    }

    // Calcul de la réépreuve
    if (pression <= 0.5) {
        if (pression >= 1 / 3) {
            reepreuve = pression + 1 / 6;
        } else {
            reepreuve = "Hors intervalle";
        }
    } else if (pression <= 6) {
        reepreuve = pression + pression / 3;
    } else if (pression <= 12) {
        reepreuve = pression + 2;
    } else {
        reepreuve = pression + (pression / 6);
    }

    // Calcul de la réépreuve en cas de réparation
    reepreuveReparation = pression * 1.5;

    // Affichage des résultats
    document.getElementById('epreuve-initiale').textContent = `Épreuve initiale : ${epreuveInitiale}`;
    document.getElementById('reepreuve').textContent = `Réépreuve : ${reepreuve}`;
    document.getElementById('reepreuve-reparation').textContent = `Réépreuve en cas de réparation : ${reepreuveReparation}`;
}
