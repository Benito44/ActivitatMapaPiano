"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Benito Martinez i Marc Jornet
///////////////////////////////////////////////////////////

const whiteKeys = document.querySelectorAll(".white");
const blackKeys = document.querySelectorAll(".black");

// Función para asociar la lógica a las teclas y clics
// Función para reproducir el sonido
function playPianoKeySound(key, soundFile) {
    let sound = new Audio(soundFile);
    playSound(sound);

}
function posarAtributs(element, atributs) {
	for (const [key, value] of Object.entries(atributs)) {
		element.setAttribute(key, value);
	}
  }
// Función para asociar la lógica a las teclas y clics
function setupPianoKey(element, key, soundFile) {
    element.addEventListener('click', function() {
		
		playPianoKeySound(key, soundFile);


    });

    window.addEventListener('keydown', function(event) {
        if (event.code === key) {
            playPianoKeySound(key, soundFile);
        }
    });
}

// Asociar la función a los eventos de clic y teclado para varias teclas
const keysData = [
    { element: document.getElementById('k65'), key: 'KeyA', soundFile: 'a1.mp3' },
    { element: document.getElementById('k83'), key: 'KeyS', soundFile: 'a2.mp3' },
	{ element: document.getElementById('k68'), key: 'KeyD', soundFile: 'b1.mp3' },
    { element: document.getElementById('k70'), key: 'KeyF', soundFile: 'b2.mp3' },
	{ element: document.getElementById('k71'), key: 'KeyG', soundFile: 'c1.mp3' },
    { element: document.getElementById('k72'), key: 'KeyH', soundFile: 'c2.mp3' },
	{ element: document.getElementById('k74'), key: 'KeyJ', soundFile: 'd1.mp3' },
    { element: document.getElementById('k82'), key: 'KeyR', soundFile: 'd2.mp3' },
	{ element: document.getElementById('k84'), key: 'KeyT', soundFile: 'e1.mp3' },
    { element: document.getElementById('k89'), key: 'KeyY', soundFile: 'e2.mp3' },
	{ element: document.getElementById('k85'), key: 'KeyU', soundFile: 'f1.mp3' },
	{ element: document.getElementById('k73'), key: 'KeyI', soundFile: 'f2.mp3' },
	{ element: document.getElementById('k79'), key: 'KeyO', soundFile: 'g1.mp3' },
	{ element: document.getElementById('k80'), key: 'KeyP', soundFile: 'g2.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit1', soundFile: 'a1s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit2', soundFile: 'a2s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit3', soundFile: 'c1s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit4', soundFile: 'c2s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit5', soundFile: 'd1s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit6', soundFile: 'd2s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit7', soundFile: 'f1s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit8', soundFile: 'f2s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit9', soundFile: 'g1s.mp3' },
	{ element: document.getElementById('k49'), key: 'Digit0', soundFile: 'g2s.mp3' },


    // Agrega más teclas según sea necesario
];

keysData.forEach(keyData => {
    setupPianoKey(keyData.element, keyData.key, keyData.soundFile);
});


function playSound(sound) {
  sound.play();
}

// Add keys

// Use Keys !


function init() {
	TouchEmulator();

}

init();
