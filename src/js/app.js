const kick = document.querySelector(".instrument-container__kick");
const snare = document.querySelector(".instrument-container__snare");
const floor = document.querySelector(".instrument-container__floor");
const tomOne = document.querySelector(".instrument-container__toom--one");
const tomTwo = document.querySelector(".instrument-container__toom--two");
const tomThree = document.querySelector(".instrument-container__toom--three");
const ride = document.querySelector(".instrument-container__ride");
const closeHh = document.querySelector(".instrument-container__closehh");
const openHh = document.querySelector(".instrument-container__openhh");
const crashOne = document.querySelector(".instrument-container__crash--one");
const crashTwo = document.querySelector(".instrument-container__crash--two");
const pedal = document.querySelector(".instrument-container__pedal");
//Baquetas
const stickFloorRight = document.querySelector(".drumstick--floorRight")
const stickFloorLeft = document.querySelector(".drumstick--floorLeft")

//test
const rightStick = document.querySelector(".right-drumstick")
const leftStick = document.querySelector(".left-drumstick")

const positionTicks = (instrument, stick, space = 0) => {
  // Necesito la posicion del instrumento a donde se moverá el element
  const coords = instrument.getBoundingClientRect()
  // obtengo la coordenada del centro del instrumento
  const center = coords.width / 2

  // obtengo la distancia respecto al  contenedor padre
  const posicionTop = instrument.offsetTop;
  const posicionLeft = instrument.offsetLeft;

  // posiciono el stick 
  stick.style.top = center + posicionTop + "px"
  stick.style.left = center - space + posicionLeft + "px"
  stick.style.zIndex = 9

}

const playInstrumentSound = (instrument) => {
  const audio = instrument.children[0];
  audio.load();
  audio.play();
}

const playBassDrums = (instrument, stick, space = 0) => {

  // Condicional para arreglar conflicto con la animación del kick
  if (stick) {
    // posiciono al stick respecto al elemento que toco.
    positionTicks(instrument, stick, space)
    stick.classList.add("drumstickAnimate")
  }

  // ejecuto el sonido
  playInstrumentSound(instrument)

  instrument.classList.add("animation-style");

  setTimeout(() => {
    if (stick) stick.classList.remove("drumstickAnimate")
    instrument.classList.remove("animation-style");
  }, 10);
};

const playCymbals = (instrument, stick, space = 0) => {

  playInstrumentSound(instrument)
  positionTicks(instrument, stick, space)
  instrument.classList.remove("crash-two-hover");
  stick.classList.add("drumstickAnimate")
  setTimeout(() => {
    instrument.classList.add("crash-two-hover");
    stick.classList.remove("drumstickAnimate")
  }, 10);
};

document.addEventListener("keypress", function (event) {
  //Drums start
  if (event.code == "KeyP") {
    playBassDrums(kick);
  }

  if (event.code == "KeyA") {
    playBassDrums(tomOne, leftStick, 50);
  }

  if (event.code == "KeyS") {
    playBassDrums(tomTwo, leftStick, 50);
  }

  if (event.code == "KeyD") {
    playBassDrums(tomThree, leftStick, 50);
  }

  if (event.code == "KeyJ") {
    playBassDrums(floor, leftStick, 50);
  }

  if (event.code == "KeyV") {
    playBassDrums(snare, leftStick, 50);
  }
  //Cymbals start
  if (event.code == "KeyQ" || event.code == "KeyW") {
    playCymbals(crashOne, leftStick, 50);
  }

  if (event.code == "KeyT" || event.code == "KeyY") {
    playCymbals(crashTwo, leftStick, 50);
  }

  if (event.code == "KeyI") {
    playCymbals(ride, leftStick, 50);
  }

  if (event.code == "KeyX") {
    playCymbals(closeHh, leftStick, 50);
  }

  if (event.code == "KeyZ") {
    playCymbals(openHh, leftStick, 50);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  kick.addEventListener("mousedown", () => playBassDrums(kick));
  pedal.addEventListener("mousedown", () => playBassDrums(kick));
  snare.addEventListener("mousedown", () => playBassDrums(snare, rightStick));
  floor.addEventListener("mousedown", () => playBassDrums(floor, rightStick));
  tomOne.addEventListener("mousedown", () => playBassDrums(tomOne, rightStick));
  tomTwo.addEventListener("mousedown", () => playBassDrums(tomTwo, rightStick));
  tomThree.addEventListener("mousedown", () => playBassDrums(tomThree, rightStick));
  crashOne.addEventListener("mousedown", () => playCymbals(crashOne, rightStick));
  crashTwo.addEventListener("mousedown", () => playCymbals(crashTwo, rightStick));
  ride.addEventListener("mousedown", () => playCymbals(ride, rightStick));
  closeHh.addEventListener("mousedown", () => playCymbals(closeHh, rightStick));
  openHh.addEventListener("mousedown", () => playCymbals(openHh, rightStick));

})

