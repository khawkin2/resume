function loadPage(location) {
    window.location = location;
}

function changeBackgroundColour() {
    let colour = randomColour();
    console.log("Random colour Generated: " + colour);
    document.body.style.backgroundColor = colour;
}

function randomColour(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
