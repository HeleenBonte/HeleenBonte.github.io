let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    kaarten: ["kaart1", "kaart2", "kaart3", "kaart4", "kaart5", "kaart6", "achterkant"],
    wachttijd: 2000,
    PREFIX: './images/',
    SUFFIX: '.png',
    gedraaidekaarten: [],
    gevondenparen: 0
}
const setup = () => {
    //alle kaarten verzamelen in een collectie
    let voorkantenCol = document.getElementsByClassName("hidden");
    //random foto's op de kaarten plaatsen
    setRandomPictures(voorkantenCol);
    //spel starten
    document.getElementById("speelveld").addEventListener("click", start);

}
const setRandomPictures = (voorkantenCol) => {
    //collectie omzetten in array
    let voorkanten = [];
    for (let i = 0; i < voorkantenCol.length; i++) {
        voorkanten.push(voorkantenCol[i]);
    }
    //2 random kaarten kiezen per foto
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        let x = voorkanten.length;
        setCard(x, voorkanten, i);
        x--;
        setCard(x, voorkanten, i);
    }
}
const setCard = (x, voorkanten, i) => {
    //random kaart(y) uitkiezen voor foto[i]
    let y = Math.floor(Math.random() * x);
    let kaart = voorkanten[y];
    kaart.src = global.PREFIX + global.kaarten[i] + global.SUFFIX;
    kaart.alt = global.kaarten[i];
    //classname op hidden zetten (vooral nodig na reset)
    kaart.className = 'hidden';
    //kaart uit array verwijderen zodat niet twee keer dezelfde kaart wordt gekozen
    voorkanten.splice(y, 1);
}
const start = () => {
    //eventlistener op kaarten zetten
    document.getElementById("playButton").className = 'hidden';
    let spelkaarten = document.getElementsByClassName('kaart');
    for (let i = 0; i < spelkaarten.length; i++) {
        spelkaarten[i].addEventListener('click', turnCard);
    }
}
const check = (e) => {
    //controleren of de kaarten hetzelfde zijn
    let kaart1 = global.gedraaidekaarten[0];
    let kaart2 = global.gedraaidekaarten[1];
    if (kaart1.alt === kaart2.alt) {
        setFound(kaart1, kaart2)
    } else {
        //indien niet hetzelfde kaarten terug omdraaien
        kaart1.className = 'hidden';
        kaart2.className = 'hidden';
        global.gedraaidekaarten = [];
    }
}
const setFound = (kaart1, kaart2) => {
    //kaarten als gevonden opgeven
    kaart1.className = 'gevonden';
    kaart2.className = 'gevonden';
    global.gevondenparen++;
    global.gedraaidekaarten = [];
    if (global.gevondenparen === 6) {
        //wanneer alle paren gevonden spel eindigen en na wachttijd resetten
        document.getElementById('youWin').className = 'overlay';
        setTimeout(reset, global.wachttijd);
    }
}
const turnCard = (e) => {
    //kaart draaien zolang er nog geen 2 gedraaid werden
    let kaart = e.target.childNodes[1];
    if (global.gedraaidekaarten.length < 2) {
        kaart.className = '';
        global.gedraaidekaarten.push(kaart);
        if (global.gedraaidekaarten.length === 2) {
            setTimeout(check, global.wachttijd);
        }
    }
}
const reset = () => {
    //winnende tekst verwijderen en kaarten opnieuw randomizeren
    document.getElementById('youWin').className = 'youWin';
    let voorkantenCol = document.getElementsByClassName("gevonden");
    setRandomPictures(voorkantenCol);
    global.gedraaidekaarten = 0;
}
window.addEventListener("load", setup);