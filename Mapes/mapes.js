let mapa = document.getElementById("Catalunya");
let paths = mapa.querySelectorAll('path');
let comarca, seleccio, divBorrar;
let pathsArray = Array.prototype.slice.call(paths, 0);
pathsArray.sort(function(a, b) {
    let aText = a.id;
    let bText = b.id;
    return aText.localeCompare(bText);
});
function llegirComarquesCreacioDiv(){
    pathsArray.forEach(function(path) {
        const div = document.createElement('div');
        comarca = path.id;

        div.setAttribute('id', comarca);
        div.setAttribute('draggable', 'true');
        div.style.padding = '10px 20px'; // Añadir relleno
        div.style.borderRadius = '25px'; // Bordes redondeados
        div.style.backgroundColor = '#4CAF50'; // Color de fondo
        div.style.color = 'white'; // Color del texto
        div.style.textAlign = 'center'; // Alineación del texto
        div.style.display = 'inline-block';
        div.textContent = comarca;
        document.getElementById("comarques").appendChild(div);
        console.log(div);


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
            path.setAttribute("fill", "red");
            console.log(seleccio);
            console.log(path.id);
            if (seleccio === path.id) {
                console.log("hola");
                path.setAttribute("fill", "green");
                seleccio = "";
            }
            else {
                path.setAttribute("fill", "red");
            }
        });
    });
}
function entrar(path) {
    path.setAttribute("fill", "red")
}

function sortir(path) {
    path.setAttribute("fill", "#eeeeee")
}

llegirComarquesCreacioDiv();
addEventListener("dragstart", (event) => {
    seleccio = event.target.id;
    console.log(seleccio);
}
);
