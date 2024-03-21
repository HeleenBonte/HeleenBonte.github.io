const setup = () => {
    tree();

    let x, y;
    let chr = '';
    const hoogte = 6;
    for(x=1; x <= hoogte; x++){
        for(y=1; y <= x; y++){
            chr += '*';
        }
        console.log(chr);
        chr='';
    }
}
const tree = () => {
    let ster = '*';
    const hoogte = 6
    for(let i = 0; i < hoogte; i++){
        console.log(ster);
        ster += '*';
    }
}
window.addEventListener("load", setup);