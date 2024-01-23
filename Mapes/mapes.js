let mapa = document.getElementById('MapToRead');
let paths = mapa.querySelectorAll('path');

let comarca, seleccio, comptadorErrors = 0;
let pathsArray = Array.prototype.slice.call(paths, 0);
pathsArray.sort(function(a, b) {
    let aText = a.id;
    let bText = b.id;
    return aText.localeCompare(bText);
});

function llegirComarquesCreacioDiv(){
    // fem iteracions de totes les ubicacions lleguides del svg per fer una serie de coses
    pathsArray.forEach(function(path) {
        if (path.id) {
            const div = document.createElement('div'); //per cada comarca creem un div
            creaDiv(path, div); // cridem a la funcio que crea el div

            path.addEventListener("dragenter", (event) => {
                entrar(path, event)
            });
            path.addEventListener("dragleave", (event) => {
                sortir(path, event)
            });

            path.addEventListener("dragover", (event) => {
                event.preventDefault();
            });

            path.addEventListener("drop", (event) => {
                event.preventDefault();
                if (seleccio === ("D" + path.id)) { //Comprovem que l'element que estem arrosegant i la posicio actual es la mateixa (afegint la D del div)
                    path.setAttribute("fill", "green"); //Si es la mateixa pintem la comarca de verd
                    seleccio = seleccio.replace(/ /g, '_'); // canvia espais per \
                    seleccio = seleccio.replace(/'/g, '');
                    $('div').find('#' + seleccio).remove(); //Borrem el div que casi amb la seleccio.
                    sonido("interface-124464.mp3"); //So de success
                    seleccio = ""; // Borrem la variable de control per evitar errors.
                    let checkSuccess = document.getElementById("ubicacions").childElementCount; //Comprovem quants divs hi han al div de ubicacions per comprovar si hem guanyat
                    if (checkSuccess < 1) { // si has guanyat
                        console.log("Felicitats")
                        $('#victoryModal').modal('show');
                    }
                } else { //Si es erronia la comarca
                    if (path.getAttribute("fill") !== "green") { //I no esta pintada de verda, per evitar pintar sobre pintat
                        sonido("buzzer-or-wrong-answer-20582.mp3");
                        path.setAttribute("fill", "red");//pintem de vermell
                    }
                }
            });
        }
    });
}
function entrar(path) {
    if (path.getAttribute("fill") !== "red" && path.getAttribute("fill") !== "green") {
        path.setAttribute("fill", "yellow")
    }
}

function sortir(path) {
    if (path.getAttribute("fill") !== "red" && path.getAttribute("fill") !== "green") {
        path.setAttribute("fill", "#eeeeee")
    }
}

llegirComarquesCreacioDiv();
addEventListener("dragstart", (event) => {
    seleccio = event.target.id;
    console.log(seleccio);
});

function reiniciarJoc(){
    window.location.href = window.location.href
}

function seguentNivell(){
    let urlActual = window.location.href;
    if (urlActual.includes("nivell1.html")){
        window.location.href = 'nivell2.html';
    }
    else if (urlActual.includes("nivell2.html")){
        window.location.href = 'nivell3.html';
    }
    else if (urlActual.includes("nivell3.html")){
        document.getElementById('botonSiguienteNivel').disabled = true;
    }
}

function creaDiv(path, div) {
    comarca = path.id;
    div.textContent = comarca; //Afegeix primer el text al div ja que farem modificacions en el text
    comarca = comarca.replace(/ /g, '_'); // canvia espais per \
    comarca = comarca.replace(/'/g, ''); // canvia ' per res
    path.setAttribute('id', comarca); // canviem les ids del svg perque dona problemes al buscar-los amb jquery
    div.setAttribute('id', "D" + comarca); // als divs li afegim una d al principi per no tindre les mateixes id
    div.setAttribute('draggable', 'true'); // Per poder arrosegar-los em de afegir-los aquest atribut
    div.style.margin = '10px'; // lo seguent son estils
    div.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    div.style.padding = '10px 20px';
    div.style.borderRadius = '25px';
    div.style.backgroundColor = '#4CAF50';
    div.style.color = 'white';
    div.style.textAlign = 'center';
    div.style.display = 'inline-block';
    div.style.fontFamily = 'Arial';
    document.getElementById("ubicacions").appendChild(div);
}


function sonido(soundfile) {
    $( document ).ready(function() {
        var snd = new Audio(soundfile);
        snd.play();
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    let url = window.location.href;

    if (url.includes("nivell3.html")){
        document.getElementById('botonSiguienteNivel').disabled = true;
    }
    else {
        console.log("Error");
    }
});

let botoSeguentNivell = document.getElementById('botonSiguienteNivel');
let botoReiniciar = document.getElementById('botonReinicio');
botoSeguentNivell.addEventListener('click', seguentNivell);
botoReiniciar.addEventListener('click', reiniciarJoc);
