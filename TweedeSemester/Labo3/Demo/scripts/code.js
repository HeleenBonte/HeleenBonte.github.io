const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    //eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" en "innerHTML"
    document.getElementById("btnContent").addEventListener("click", changeContent);
}

//function mouseover
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

//function click
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

//function mouseout
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

//change CSS
const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li"); //return array
    for (let i = 0; i < listItems.length; i++){
        //1ste manier (minst efficient, css in js verwerken ipv in apart css bestand)
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/

        //2de manier (overzichtelijker)
       // listItems[i].className = "listItemsStyleNone colorRed";

        //3de manier
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li"); //return array
    for (let i = 0; i < listItems.length; i++){
        //1ste manier (minst efficient)
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/

        //2de manier (overzichtelijker)
       // listItems[i].className = "listItemsStyleDisc colorWhite";

        //3de manier
        listItems[i].classList.add("colorWhite");
        listItems[i].classList.add("listItemsStyleDisc");
        console.log("output " + listItems[i].className);
    }
}

//textContent vs innerHTML
const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);