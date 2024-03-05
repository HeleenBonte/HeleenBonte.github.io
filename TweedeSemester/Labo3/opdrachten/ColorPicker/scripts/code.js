const setup = () => {

	let sliders = document.getElementsByClassName("slider");
	let sliderRed = document.getElementById("sliderRed");
	let sliderGreen = document.getElementById("sliderGreen");
	let sliderBlue = document.getElementById("sliderBlue");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliderRed.addEventListener("change", update);
	sliderRed.addEventListener("input", update);
	sliderGreen.addEventListener("change", update);
	sliderGreen.addEventListener("input", update);
	sliderBlue.addEventListener("change", update);
	sliderBlue.addEventListener("input", update);

	// maak het blokje rood

}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let valueRed=sliders[0].value;
	let valueGreen=sliders[1].value;
	let valueBlue=sliders[2].value;
	console.log("de waarde van de rode slider is momenteel : "+valueRed);
	console.log("de waarde van de groene slider is momenteel : "+valueGreen);
	console.log("de waarde van de blauwe slider is momenteel : "+valueBlue);
	colorDemos[0].style.backgroundColor="rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
	let red = document.getElementById("Red");
	let green = document.getElementById("Green");
	let blue = document.getElementById("Blue");
	red.textContent = "Red " + valueRed;
	green.textContent = "Green " + valueGreen;
	blue.textContent = "Blue " + valueBlue;
}



// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);