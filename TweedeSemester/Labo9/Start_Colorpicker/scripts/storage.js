

const storeSliderValues = () => {
    let sliderValues = {};
    let sliderValuesJSON;

    sliderValues.red = parseInt(document.getElementById("sldRed").value);
    sliderValues.green = parseInt(document.getElementById("sldGreen").value);
    sliderValues.blue = parseInt(document.getElementById("sldBlue").value);

    sliderValuesJSON = JSON.stringify(sliderValues);
    localStorage.setItem("sliderValues", sliderValuesJSON);
}

const restoreSliderValues = () => {
    let sliderValues;
    let sliderValuesJSON = localStorage.getItem("sliderValues");

    if(sliderValuesJSON !== undefined){
        sliderValues = JSON.parse(sliderValuesJSON);
        document.getElementById("sldRed").value = sliderValues.red;
        document.getElementById("sldGreen").value = sliderValues.green;
        document.getElementById("sldBlue").value = sliderValues.blue;
    }
}

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = [];
    let swatchesJSON;
    let swatchesElements = document.getElementsByClassName('swatch');

    for (let i = 1; i < swatchesElements.length; i++) {
        let swatch = {};
        swatch.red = parseInt(swatchesElements[i].getAttribute('red'));
        swatch.green = parseInt(swatchesElements[i].getAttribute('green'));
        swatch.blue = parseInt(swatchesElements[i].getAttribute('blue'));
        swatches.push(swatch);
    }

    swatchesJSON = JSON.stringify(swatches);
    localStorage.setItem('swatches', swatchesJSON);
}

const restoreSwatches = () => {
    let swatches;
    let swatchesJSON = localStorage.getItem('swatches');

    if(swatchesJSON !== undefined) {
        swatches = JSON.parse(swatchesJSON);
        for (let i = 0; i < swatches.length; i++) {
            let swatch = swatches[i];
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        }
    }
}
