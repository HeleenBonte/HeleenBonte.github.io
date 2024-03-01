const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",show);

    //ook : document.getElementById("btnSend").addEventListener("click",show);
}
const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () => {
    let txtName = document.getElementById("txtName");
    if(txtName.value != ""){
        alert("jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);
        console.log (`jouw naam is ${txtName.value}`);
    }
    else {
        alert("Gelieve naam in te vullen");
    }
}
window.addEventListener("load", setup);