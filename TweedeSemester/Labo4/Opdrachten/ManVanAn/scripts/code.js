const setup = () => {
    document.getElementById("btnSend").addEventListener("click", countAn);
}
const countAn = () => {
let text = document.getElementById("txtInput").value;
let zoekterm = document.getElementById("txtZoekterm").value;
        let aantal = 0;
        let index = text.indexOf(zoekterm);
        while(index !== -1){
            aantal++;
            index = text.indexOf(zoekterm, index+zoekterm.length);
        }
        console.log(aantal);


}
window.addEventListener("load", setup);