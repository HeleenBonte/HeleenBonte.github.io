let global = {
    g: "https://www.google.com/search?q=",
    y: "https://www.youtube.com/results?search_query=",
    t: "https://twitter.com/hashtag/",
    i: "https://www.instagram.com/explore/tags/"
}
const setup = () => {
    loadLocalStorage();
    document.getElementById("btnGo").addEventListener("click", go);
    document.getElementById("btnClear").addEventListener("click", clearLocalStorage);
}
const go = () => {
    let input = document.getElementById("txtSearch").value;
    let regex = input.match("\/[a-z]{1} [a-z]*");
    if (regex != null) {
        let prefix = input.slice(0, 2);
        if (prefix === "/g") {
            google(input.slice(3));
        } else if (prefix === "/t") {
            twitter(input.slice(3));
        } else if (prefix === "/y") {
            youtube(input.slice(3));
        } else if (prefix === "/i") {
            instagram(input.slice(3));
        } else {
            alert("invalid command");
        }
    }
}
const google = (e) => {
    let url = global.g + e;
    window.open(url, '_blank');
    createCardElement("Google", e, url);
    saveLocalStorage("Google", e, url);
}
const twitter = (e) => {
    let url = global.t + e;
    window.open(url, '_blank');
    createCardElement("Twitter", e, url);
    saveLocalStorage("Twitter", e, url);
}
const youtube = (e) => {
    let url = global.y + e;
    window.open(url, '_blank');
    createCardElement("YouTube", e, url);
    saveLocalStorage("YouTube", e, url);
}
const instagram = (e) => {
    let url = global.i + e;
    window.open(url, '_blank');
    createCardElement("Instagram", e, url);
    saveLocalStorage("Instagram", e, url);
}
const saveLocalStorage = (name, e, url) => {
    let cards = [];
    let card = {
        title : name,
        text : e,
        link : url
    }
    let cardsJSON = localStorage.getItem("cards");
    if(cardsJSON !== null){
        cards = JSON.parse(cardsJSON);
    }
    cards.push(card);
    cardsJSON = JSON.stringify(cards);
    localStorage.setItem("cards", cardsJSON);
}
const loadLocalStorage = () => {
    let cards = [];
    let cardsJSON = localStorage.getItem("cards");
    if(cardsJSON !== null){
        cards = JSON.parse(cardsJSON);
    }
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        createCardElement(card.title, card.text, card.url);
    }
}
const clearLocalStorage = () => {
    localStorage.clear()
    clearCards();
}
const clearCards = () => {
    let cards = document.getElementById("historyCards").children;
    while(cards.length > 0){
        cards[0].remove();
    }
}
const createCardElement = (title, text, url) => {
    //card body met titel, text en link
    let cardBod = createElementWithClassName("div", "card-body");
    cardBod.appendChild(createElementWithClassNameAndText("h5", "card-title " + title.toLowerCase() + "-card", title));
    cardBod.appendChild(createElementWithClassNameAndText("p", "card-text " + title.toLowerCase() + "-card", text));
    let link = createElementWithClassNameAndText("a", "btn btn-primary " + title.toLowerCase() + "-button", "Go!");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    cardBod.appendChild(link);

    //card element met child card body
    let cardEl = createElementWithClassName("div", "card " + title.toLowerCase() + "-card");
    cardEl.appendChild(cardBod);

    //col-4 element met child card element
    let colEl = createElementWithClassName("div", "col-4");
    colEl.appendChild(cardEl);
    document.getElementById("historyCards").appendChild(colEl);
}
const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}
const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
}
window.addEventListener("load", setup);