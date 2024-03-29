const setup = () => {
    let lstPar = document.getElementsByClassName('color');
    // for (let i = 0; i < lstPar.length; i++) {
    //    lstPar[i].addEventListener("click", change);
    //}
    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", changeDiv);
    }
}
const change = (e) => {
    e.target.className = 'colorPar';
}
const changeDiv = (e) => {
    e.target.className = 'colorPar';
}
window.addEventListener("load", setup);