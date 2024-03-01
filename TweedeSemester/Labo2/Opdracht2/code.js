const setup = () => {
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",show);
}
const show = () => {
    console.log(window.confirm("Weet u het zeker?"));

}
window.addEventListener("load", setup);