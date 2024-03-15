const setup = () => {
    document.getElementById("btnSend").addEventListener("click", spaties);
}
const spaties = () => {
    let text = document.getElementById("txtInput").value;
    let textMetSpaties = "";
    for (let i = 0; i < text.length; i++) {
        textMetSpaties += text[i] + " ";
    }
    console.log(textMetSpaties);
}

window.addEventListener("load", setup);