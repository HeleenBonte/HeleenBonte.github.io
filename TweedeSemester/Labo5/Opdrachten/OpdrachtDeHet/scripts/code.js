const setup = () => {
    document.getElementById('btnSend').addEventListener("click", vervangDe);
}
const vervangDe = () => {
    let txtZin = document.getElementById('txtZin');
    let zinOG = txtZin.value;
    let zin = zinOG;
    let zoekTerm = 'de';
    let teVervangenDoor = 'het'
    let zinVervangen = '';
    let index = zinOG.indexOf(zoekTerm);
    while(index !== -1){
        zinVervangen += zin.slice(0, index) + teVervangenDoor
        zin = zin.slice(index + zoekTerm.length);

        index = zin.indexOf(zoekTerm);
    }
    zinVervangen += zin;
    console.log(zinVervangen);
}
window.addEventListener("load", setup);