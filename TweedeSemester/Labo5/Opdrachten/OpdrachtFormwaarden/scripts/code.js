const setup = () => {
    document.getElementById('btnSubmit').addEventListener("click", waardenOpslaan);

}

const waardenOpslaan = () => {
    let isRoker = getIsRoker();
    let moedertaal = getMoedertaal();
    let buurland = getFavoBuurland();
    let bestelling = getBestelling();
    if (isRoker) {
        console.log('is roker');
    } else {
        console.log('is geen roker');
    }
    console.log(moedertaal);
    console.log(buurland);
    console.log(bestelling);

}
const getIsRoker = () => {
    let chbRoker = document.getElementById('chbRoker');
    return chbRoker.checked;
}
const getMoedertaal = () => {
    let moedertalen = document.getElementsByName('moedertaal');
    let moedertaal;
    for (let value of moedertalen.values()) {
        if (value.checked) {
            moedertaal = value;
        }
    }
    return "moedertaal is " +  moedertaal.value;
}
const getFavoBuurland = () => {
    let buurlanden = document.getElementById('slcBuurland').options;
    let index = buurlanden.selectedIndex;
    let buurland = 'favoriete buurland is ';
    if(index === -1){
        buurland = 'geen buurland geselecteerd';
    }
    if(index === 0){
        buurland += 'Nederland'
    }
    if(index === 1){
        buurland += 'Frankrijk'
    }
    if(index === 2){
        buurland += 'Duitsland'
    }
    return buurland;
}
const getBestelling = () => {
    let bestelling = 'bestelling bestaat uit ';
    let bestellingen = document.getElementById('slcBestelling').options;
    for (let i = 0; i < bestellingen.length; i++) {
        if(bestellingen[i].selected){
            bestelling += bestellingen[i].text + ' ';
        }
    }
    return bestelling;
}
window.addEventListener("load", setup);