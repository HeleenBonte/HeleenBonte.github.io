const addSwatchComponent = (red, green, blue) => {
    let swatch = buildSwatchComponent(red, green, blue);
    document.getElementById("swatchComponents").append(swatch);
}

const configureSwatch = (swatch, red, green, blue) => {

    swatch.setAttribute("red", red);

    swatch.setAttribute("green", green);

    swatch.setAttribute("blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = (red, green, blue) => {

        // maak de twee element nodes
        let swatch = document.createElement("div");
        let btnDelete = document.createElement("input");

        // stel de swatch in
        swatch.className = "swatch";
        configureSwatch(swatch, red, green, blue);
        swatch.addEventListener("click", setColorPickerFromSwatch);

        // stel de delete knop in
        btnDelete.setAttribute("type", "button");
        btnDelete.setAttribute("value", "X");
        btnDelete.addEventListener("click", deleteSwatch);

        // voeg de swatch en button toe aan de swatchcomponent
        swatch.appendChild(btnDelete);
        return swatch;
    };


