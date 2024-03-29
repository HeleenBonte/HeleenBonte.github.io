const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	document.getElementById('btnSave').addEventListener("click", create);

}

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	
}
const create = () => {
	let swatch = document.createElement("div");
	swatch.className = 'newSwatch';
	swatch.innerHTML = '<input type=\'button\' onclick=\'event.stopPropagation()\' class=\'btnRemove\' value=\'X\'>';
	let red = Number(document.getElementById('lblRed').textContent);
	let green = Number(document.getElementById('lblGreen').textContent);
	let blue = Number(document.getElementById('lblBlue').textContent);
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	document.getElementById('output').append(swatch);
	let buttons = document.getElementsByClassName('btnRemove');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", remove);
	}
	let swatches = document.getElementsByClassName('newSwatch');
	for (let i = 0; i < swatches.length; i++) {
		swatches[i].addEventListener("click", change);
	}
}
const remove = (e) => {
	e.target.parentElement.remove();
	e.target.remove();

}
const change = (e) => {
	let swatch = document.getElementById('swatch');
	let swatch2 = e.target;
	if(swatch2 !== null) {
		swatch.style.backgroundColor = swatch2.style.backgroundColor;
	}
}
window.addEventListener("load", initialize);