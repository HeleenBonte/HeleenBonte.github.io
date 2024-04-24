const setup = () => {
    let start = new Date();
    console.log(start);
    console.log(start.getDay()); //dag van de week, zondag = 0 zaterdag = 6
    console.log(start.getMonth()+1); //januari = 0, december = 11
    console.log(start.getFullYear());
    console.log(start.getDate());
    console.log(start.getDate() + '-' + start.getMonth() + '-'
    + start.getFullYear() + '-' + start.getHours() + ':'
    + start.getMinutes() + ':' + start.getSeconds());

    let datum = new Date(2024, 0, 1);
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString());
    console.log("toISOString " + event.toISOString());
    console.log("toDateString " + event.toDateString());
    console.log("toTimeString " + event.toTimeString());

    console.log("toISOString " + datum.toISOString());



    let bday = new Date(1995,7,5);
    console.log(bday.getDay());
    let leeftijdMS = new Date() - bday;
    console.log(leeftijdMS);
    let leeftijdDagen = leeftijdMS/1000/60/60/24;
    console.log(leeftijdDagen);

    let examen = new Date(2024, 4, 29);
    let milistegaan = new Date() - examen;
    let dagentegaan = milistegaan/1000/60/60/24*-1;
    console.log(dagentegaan);
}
window.addEventListener("load", setup);