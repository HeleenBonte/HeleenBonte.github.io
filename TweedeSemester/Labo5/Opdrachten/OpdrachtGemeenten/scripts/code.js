const setup = () => {
    let gemeenten = [];
    let gemeente = window.prompt('gemeente:');
    let stop = 'stop';
    while(gemeente.localeCompare(stop)){
        gemeenten.push(gemeente);
        gemeente = window.prompt('gemeente:');
        if(gemeente.localeCompare(stop)){
            gemeenten.push(gemeente);
        }
    }
    let div = document.getElementById('output');
    let output = "<select>";
    for (let i = 0; i < gemeenten.length; i++) {
        output += "<option>" + gemeenten[i] + '</option>';
    }
    output += "</select>";
    div.innerHTML = output;
}
window.addEventListener("load", setup);