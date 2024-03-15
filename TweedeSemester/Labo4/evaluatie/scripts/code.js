const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", changeImg);
}

const changeImg = () => {
    let photo = document.getElementById("imgPhoto");
    photo.src = "./images/foto2.jpg";
    photo.alt = "silly raccoon";
    photo.className = "sizePhoto"
    document.getElementById("txtText").textContent = "Silly Raccoon";
}
window.addEventListener("load", setup);