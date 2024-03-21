const setup = () => {
    document.getElementById('btnKerstboom').addEventListener("click", maakKerstboom);
}
const maakKerstboom = () => {
    let hoogte = Number(document.getElementById('nmrHoogte').value);
    let aantalBallen = Number(document.getElementById('nmrAantalBallen').value);
    let boom = '';
    let aantal = 0;
    for (let i = 0; i <= hoogte; i++) {
        aantal += i;
    }
    let interval = Math.floor(aantal / aantalBallen);
    let boomHTML = document.getElementById('kerstBoom');
    for (let i = 0; i <= hoogte; i++) {
        boom = '';
        for (let y = 0; y < i; y++) {
            if (aantal%interval === 0) {
                boom += 'o';
            } else {
                boom += '*';
            }
            aantal--;
        }
        boomHTML.innerHTML += boom + '<br>';
    }
}
window.addEventListener("load", setup);