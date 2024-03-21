const setup = () => {
    document.getElementById('btnSend').addEventListener("click", splitsen);

}
const splitsen = () => {
    let txtWoord = document.getElementById('txtWoord');
    let woord = txtWoord.value;
    let list = document.getElementById('lstTrigrams');
    let trigram = '';
    //let trigramList = '';
    for(let i = 0; i <= woord.length-3; i++){
        trigram += woord.slice(i, i+3).toUpperCase() + '<br>';
        //trigramList = woord.slice(i, i+3).toUpperCase()
        //list.innerHTML += '<li>' + trigramList + '</li>';
    }
    let output = document.getElementById('output');
    output.innerHTML = trigram;
    //console.log(trigram);
}
window.addEventListener("load", setup);