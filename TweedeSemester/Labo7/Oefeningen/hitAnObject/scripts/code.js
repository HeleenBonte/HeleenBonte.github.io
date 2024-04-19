let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 3000,

    score: 0,
    timeoutId: 0
}
const setup = () => {
    console.log("loaded");
    document.getElementById("btnStart").addEventListener("click", start);
    //document.getElementById("target").addEventListener("click", controle);
}
const start = (e) => {
    e.target.remove();
    let img = document.getElementById("target");
    move();
    img.addEventListener("click", controle);
}
const controle = (e) => {
    let img = e.target;
    if (img.className === "bom") {
        alert();
        global.score = 0;
    } else {
        global.score++;
        console.log(global.score);
        move();
        //global.timeoutId = setTimeout(move, global.MOVE_DELAY);
    }
    print();
}
const print = () => {

    let p = document.getElementById("tekst")
    let tekst = p.textContent;
    tekst = tekst.slice(0, 12);
    tekst += global.score;
    p.textContent = tekst;
}
const alert = () => {
    window.alert("GAME OVER");
    clearTimeout(global.timeoutId);
    reset();
}
const reset = () => {
    let element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("id", "btnStart");
    element.setAttribute("value", "START");
    /*let button = document.createTextNode( <p id=\"tekst\">Aantal hits 0</p>\n" +
        "    <img id=\"target\" class=\"bom\" src=\"images/0.png\" alt=\"BOMB\">")*/
    let speelveld = document.getElementById("playField");
    let child = document.getElementById("tekst")
    speelveld.insertBefore(element, child);
    document.getElementById("btnStart").addEventListener("click", start);

    let img = document.getElementById("target");
    img.style.left = "150px";
    img.style.top = "10px";


}
const move = () => {
    let img = document.getElementById("target");
    let speelveld = document.getElementById("playField");
    let maxLeft = speelveld.clientWidth - global.IMAGE_SIZE;
    let maxHeight = speelveld.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    img.style.left = left + "px";
    img.style.top = top + "px";
    change(img);
}
const change = (img) => {
    let number = Math.floor(Math.random() * global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX + number + global.IMAGE_PATH_SUFFIX;
    if (number === 0) {
        img.className = "bom";
    } else {
        img.className = "";
    }
    clearTimeout(global.timeoutId);
    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
}

window.addEventListener("load", setup);


