const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");


    btnSubstring.addEventListener("click", txtSubstring);
}
const txtSubstring = () =>{
    let txtInput = document.getElementById("txtInput");
    if(txtInput.value != ""){
        let ondergrens = document.getElementById("ondergrens");
        let bovengrens = document.getElementById("bovengrens");
        let tekst = txtInput.value.substring(ondergrens.value, bovengrens.value);
        let txtOutput = document.getElementById("txtOutput");
        txtOutput.innerHTML = tekst;
    }
}
window.addEventListener("load", setup);