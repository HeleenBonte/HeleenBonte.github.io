const setup = () => {
    let start = new Date();
    console.log(start);
    console.log(start.getDay()); //dag van de week, zondag = 0 zaterdag = 6
}
window.addEventListener("load", setup);