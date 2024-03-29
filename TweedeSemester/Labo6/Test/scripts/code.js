const setup = () => {
    document.getElementById('slcEi').addEventListener("change", loadImg);
    document.getElementById('txtLetter').addEventListener("input", countInput);
}

const loadImg = () => {
    let imgElement = document.getElementById('img');
    let slcEi = document.getElementById('slcEi');
    let ei = Number(slcEi.value);
    let note = document.getElementById('note');
    if (ei === 1) {
        imgElement.className = 'hidden';
        note.textContent = '';
        document.getElementById('count').textContent = ' ';
    } else {
        if (ei === 2) {
            imgElement.className = 'with-egg';
            note.textContent = 'Hierboven, een kip met een ei';
        } else {
            imgElement.className = ' ';
            note.textContent = 'Hierboven, een kip zonder ei';
        }
        let letter = document.getElementById('txtLetter').value;
        if(letter.length !== 0){
            countInput();
        }
    }

}

const countInput = () => {
    let letter = document.getElementById('txtLetter').value;
    if (letter.length !== 0) {
        let zin = document.getElementById('note').textContent;
        let output = document.getElementById('count');
        let count = 0;
        let index = zin.indexOf(letter);
        while (index !== -1) {
            count++;
            index = zin.indexOf(letter, index + 1);
        }
        output.textContent = 'letter \'' + letter + '\' komt ' + count + ' keer voor in bovenstaande zin';
    }
}
window.addEventListener("load", setup);