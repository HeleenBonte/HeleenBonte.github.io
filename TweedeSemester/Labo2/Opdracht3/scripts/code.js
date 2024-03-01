const setup = () => {
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",change);

}

const change = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);