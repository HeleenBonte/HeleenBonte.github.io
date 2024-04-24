let personen = [];
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const voegPersoonToe = (persoon) => {
    let lstPersonen = document.getElementById('lstPersonen');
    let option = document.createElement('option');
    option.text = persoon.voornaam + " " + persoon.familienaam;
    option.value = persoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}
const bewerkBestaandePersoon = (persoon, index) => {
    let lstPersonen = document.getElementById('lstPersonen');
    let option = document.createElement('option');
    option.text = persoon.voornaam + " " + persoon.familienaam;
    option.value = persoon.email;
    lstPersonen.replaceChild(option, lstPersonen.children[index]);
}
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    if (!hasErrors()) {
        let lstPersonen = document.getElementById('lstPersonen');
        let index = lstPersonen.selectedIndex
        let persoon = {}
        vulPersoonOpBasisVanUserInterface(persoon);

        if (index === -1 ) {
            // een nieuw aangemaakte persoon voegen we toe
            let bestaatAl = false;
            for (let i = 0; i < personen.length; i++) {
                if (persoon.email === personen[i].email) {
                    window.alert('Dit emailadres werd reeds gebruikt');
                    bestaatAl = true;
                }
            }if(!bestaatAl) {
                personen.push(persoon);
                voegPersoonToe(persoon);
            }
        } else {
            // een bestaande persoon in de lijst passen we aan
            personen[index] = persoon
            // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
            bewerkBestaandePersoon(persoon, index);

        }
    }
    setup();
}
const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let vn = document.getElementById('txtVoornaam').value.trim();
    let fm = document.getElementById('txtFamilienaam').value.trim();
    let bd = document.getElementById('txtGeboorteDatum').value.trim();
    let mail = document.getElementById('txtEmail').value.trim();
    let kids = document.getElementById('txtAantalKinderen').value.trim();

    persoon.voornaam = vn;
    persoon.familienaam = fm;
    persoon.geboortedatum = bd;
    persoon.email = mail;
    persoon.aantalKinderen = kids;
}
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById('lstPersonen');
    lstPersonen.selectedIndex = -1;
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text') {
            inputs[i].value = '';
        }
    }
    clearAllErrors();
    /*
    let inputElem = document.querySelectorAll('input[type=text]');
    inputElem.forEach((elem) => {
    elem.value = '';
    });
     */
};
const change = () => {
    let index = document.getElementById('lstPersonen').selectedIndex;
    let persoon = personen[index];
    let vn = document.getElementById('txtVoornaam');
    let fm = document.getElementById('txtFamilienaam');
    let bd = document.getElementById('txtGeboorteDatum');
    let mail = document.getElementById('txtEmail');
    let kids = document.getElementById('txtAantalKinderen');
    vn.value = persoon.voornaam;
    fm.value = persoon.familienaam;
    bd.value = persoon.geboortedatum;
    mail.value = persoon.email;
    kids.value = persoon.aantalKinderen;
}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    let lijst = lstPersonen.children;
    for (let i = 0; i < lijst.length; i++) {
        lijst[i].addEventListener("click", change);
    }
    // moet de data van die persoon getoond worden in het formulier
};
window.addEventListener("load", setup);