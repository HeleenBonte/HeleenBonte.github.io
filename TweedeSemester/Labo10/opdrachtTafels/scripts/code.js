const setup = () => {
    document.getElementById("btnMultiply").addEventListener("click", multiply);
}
const multiply = () => {
    let date = new Date();
    let time = date.toTimeString().slice(0, 8);

    let input = document.getElementById("txtInput").value;
    let regex = input.match("[0-9]+");
    if(regex != null) {
        createTable(input, time);
    }
    else{
        alert("Gelieve een getal in te vullen");
    }
}
const createTable = (input, time) => {
    document.getElementById("txtInput").value = "";

    let tafel = createElementWithClassName("div", "tafel");
    let head = createElementWithClassName("div", "hoofd");
    head.innerText = "Tafel van " + input + " aangemaakt op: " + time;
    tafel.appendChild(head);
    for (let i = 1; i < 11; i++) {
        let line = createElementWithClassName("div");
        if(i%2 !== 0) {
            line.className = "oneven";
        }
        else {
            line.className = "even";
        }
        line.innerText = input + " x " + i + " = " + input * i;
        tafel.appendChild(line);
    }
    document.getElementById("tafels").appendChild(tafel)
}
const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}
window.addEventListener("load", setup);