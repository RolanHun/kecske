window.addEventListener("load", init);

function $(nev){
    return document.querySelectorAll(nev);
}

function init() {
    $("footer p") [0].addEventListener("load", keszitok);
}

function keszitok() {
    this.innerHTML += "Bartók Roland - Balajcza Milan";
}
