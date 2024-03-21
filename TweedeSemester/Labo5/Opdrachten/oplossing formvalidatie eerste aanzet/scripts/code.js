const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
}
const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById('txtFamilienaam');
	let errFamilienaam = document.getElementById('errFamilienaam');
	let familienaam = txtFamilienaam.value.trim();
	if(familienaam.length === 0 || familienaam.length > 50) {
		txtFamilienaam.className = 'invalid';
		if (familienaam.length === 0) {
			errFamilienaam.innerHTML = 'verplicht veld';
		}
		else{
			errFamilienaam.innerHTML = 'max 50 karakters';
		}
	}
	else{
		txtFamilienaam.className = '';
		errFamilienaam.innerHTML = '';
	}
}
const valideerGeboortedatum = () => {
	let dteGeboortedatum = document.getElementById('dteGeboortedatum');
	let geboortedatum = dteGeboortedatum.value.trim();
	let errGeboortedatum = document.getElementById('errGeboortedatum');
	let index1 = geboortedatum.indexOf('-');
	let index2 = geboortedatum.indexOf('-', index1 +1);
	if(geboortedatum.length === 0 || index1 === 5 & index2 === 8){
		dteGeboortedatum.className = 'invalid';
		if(geboortedatum.length ===0){
			errGeboortedatum.innerHTML = 'verplicht veld';
		}
		else{
			errGeboortedatum.innerHTML = 'formaat is niet jjjj-mm-dd';
		}
	}
	else{
		dteGeboortedatum.className = '';
		errGeboortedatum.innerHTML = '';
	}
}
const valideerEmail = () => {
	let txtEmail = document.getElementById('txtMail');
	let email = txtEmail.value.trim();
	let errEmail = document.getElementById('errEmail');
	if(email.length === 0){
		txtEmail.className = 'invalid';
		errEmail.innerHTML = 'verplicht veld';
	}
	else{
		txtEmail.className = '';
		errEmail.innerHTML = '';
	}
	let indexAt = email.indexOf('@');
	if(indexAt === -1 || indexAt === 0 || indexAt === email.length -1){
		txtEmail.className = 'invalid';
		errEmail.innerHTML = 'geen geldig email adres';
	}
	else {
		txtEmail.className = '';
		errEmail.innerHTML = '';
	}
}
const valideerAantalKinderen = () => {
	let nmrAantalKinderen = document.getElementById('nmrAantalKinderen');
	let aantalKinderen = nmrAantalKinderen.value;
	let errAantalKinderen = document.getElementById('errAantalKinderen');
	if(aantalKinderen < 0 || aantalKinderen > 99){
		nmrAantalKinderen.className = 'invalid';
		if(aantalKinderen < 0){
			errAantalKinderen.innerHTML = 'is geen positief getal';
		}
		else{
			errAantalKinderen.innerHTML = 'is te vruchtbaar';
		}
	}
	else {
		nmrAantalKinderen.className = '';
		errAantalKinderen.innerHTML = '';
	}
}
window.addEventListener("load", setup);