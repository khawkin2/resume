window.onload();

function onload() {
    console.log("Hello");
}

function loadPage(name){
    console.log(name);
    window.location = "templates/" + name + ".html";
}
