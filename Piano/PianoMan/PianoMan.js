"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Benito Martinez i Marc Jornet
///////////////////////////////////////////////////////////

const whiteKeys = document.querySelectorAll(".white");
const blackKeys = document.querySelectorAll(".black");
let currentIndex = 0;
function playPianoKeySound(key, soundFile) {
        let sound = new Audio(soundFile);
        playSound(sound);
}

function setupPianoKey(element, key) {
    let isClicked = false;

    function playAndReset(event) {
        if (isClicked) {
            // Encuentra el elemento de texto correspondiente
            const clickedKeyId = event.target.id;
            const textId = clickedKeyId.replace('k', 'c');
            const textElement = document.getElementById(textId);

            // Si encuentra el elemento de texto, procede
            if (textElement) {
                const textContent = textElement.textContent;

                // Busca el elemento audio correspondiente por el contenido del texto
                const audioElement = document.getElementById(textContent);

                // Reproduce el audio asociado
                playPianoKeySound(audioElement.id, audioElement.src);

                // Añade la clase 'activa' al elemento
                element.classList.add('activa');

                // Restablece el estado después de un tiempo
                setTimeout(() => {
                    isClicked = false;
                    // Elimina la clase 'activa' después del tiempo de espera
                    element.classList.remove('activa');
                }, 300);
            }
        
    }
    }

    element.addEventListener('touchstart', function (event) {
        // Detiene la propagación del evento para evitar ejecuciones múltiples
        event.stopPropagation();

        if (event.shiftKey) {
            const currentIndex = keysData.findIndex(item => item.element === element);
            const prevIndex = (currentIndex - 1 + keysData.length) % keysData.length;
            const nextIndex = (currentIndex + 1) % keysData.length;
    
            playPianoKeySound(keysData[prevIndex].key, keysData[prevIndex].soundFile);
            keysData[prevIndex].element.classList.add('activa');
            setTimeout(() => keysData[prevIndex].element.classList.remove('activa'), 300);
    
            playPianoKeySound(keysData[nextIndex].key, keysData[nextIndex].soundFile);
            keysData[nextIndex].element.classList.add('activa');
            setTimeout(() => keysData[nextIndex].element.classList.remove('activa'), 300);            
        } else {

            // Verifica si ya se hizo clic recientemente
            if (!isClicked) {
                isClicked = true;
                playAndReset(event);
            }
        }
    });



    window.addEventListener('keydown', function(event) {
        if (event.code === key || (event.code === 'KeyK' && key === 'KeyR') || (event.code === 'KeyL' && key === 'KeyT') || (event.code === 'Semicolon' && key === 'KeyY') 
        || (event.code === 'KeyQ' && key === 'KeyG') || (event.code === 'KeyW' && key === 'KeyH') || (event.code === 'KeyE' && key === 'KeyJ')) {
            const keyElement = document.getElementById(event.key.toUpperCase());

            if (keyElement) {
                const soundFile = keyElement.src;
                playPianoKeySound(event.key.toUpperCase(), soundFile);
                element.classList.add('activa');
            setTimeout(() => element.classList.remove('activa'), 300);
        }}
    });
    
    
    window.addEventListener('keyup', function(event) {
        if (event.code === key) {
            setTimeout(() => element.classList.remove('activa'), 300);
        }
    });

}


const keysData = [
    { element: document.getElementById('k65'), key: 'KeyA' },
    { element: document.getElementById('k83'), key: 'KeyS'},
	{ element: document.getElementById('k68'), key: 'KeyD'},
    { element: document.getElementById('k70'), key: 'KeyF'},
	{ element: document.getElementById('k71'), key: 'KeyG'},
    { element: document.getElementById('k72'), key: 'KeyH' },
	{ element: document.getElementById('k74'), key: 'KeyJ' },
    { element: document.getElementById('k82'), key: 'KeyR'},
	{ element: document.getElementById('k84'), key: 'KeyT' },
    { element: document.getElementById('k89'), key: 'KeyY'},
	{ element: document.getElementById('k85'), key: 'KeyU'},
	{ element: document.getElementById('k73'), key: 'KeyI'},
	{ element: document.getElementById('k79'), key: 'KeyO'},
	{ element: document.getElementById('k80'), key: 'KeyP'},
	{ element: document.getElementById('k49'), key: 'Digit1'},
	{ element: document.getElementById('k50'), key: 'Digit2'},
	{ element: document.getElementById('k51'), key: 'Digit3'},
	{ element: document.getElementById('k52'), key: 'Digit4'},
	{ element: document.getElementById('k53'), key: 'Digit5' },
	{ element: document.getElementById('k54'), key: 'Digit6' },
	{ element: document.getElementById('k55'), key: 'Digit7'},
	{ element: document.getElementById('k56'), key: 'Digit8'},
	{ element: document.getElementById('k57'), key: 'Digit9'},
	{ element: document.getElementById('k48'), key: 'Digit0'},
];


keysData.forEach(keyData => {
    setupPianoKey(keyData.element, keyData.key);
});

function playSound(sound) {
  sound.play();
}

function init() {
    const keyIds = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const soundFiles = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2', 'd2', 'e2', 'f2', 'g2', 'a2', 'b2', 'c1s', 'd1s', 'f1s', 'g1s', 'a1s', 'c2s', 'd2s', 'f2s', 'g2s', 'a2s'];
    // Crear los audios
    for (let i = 0; i < keyIds.length; i++) {
        const audioElement = document.createElement('audio');
        audioElement.id = keyIds[i];
        audioElement.src = `${soundFiles[i]}.mp3`;
        document.body.appendChild(audioElement);
    }
    TouchEmulator();
}
init();