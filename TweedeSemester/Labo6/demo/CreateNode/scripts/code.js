const setup = () => {
    let element = document.createElement("p"); //create an elementNode
    element.setAttribute("class", "color")

    console.log(element.getAttribute('class'));

    let textNode = document.createTextNode("Hello world!"); //create TextNode
    element.appendChild(textNode);
    document.querySelector('#myDIV').appendChild(element);
}
window.addEventListener("load", setup);