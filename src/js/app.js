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
const stickSnareLeft = document.querySelector(".drumstick--snareLeft")
const stickSnareRight = document.querySelector(".drumstick--snareRight")

const stickTom1Right = document.querySelector(".drumstick--tom1Right")
const stickTom1Left = document.querySelector(".drumstick--tom1Left")
const stickTom2Right = document.querySelector(".drumstick--tom2Right")
const stickTom2Left = document.querySelector(".drumstick--tom2Left")
const stickTom3Right = document.querySelector(".drumstick--tom3Right")
const stickTom3Left = document.querySelector(".drumstick--tom3Left")

const stickFloorRight = document.querySelector(".drumstick--floorRight")
const stickFloorLeft = document.querySelector(".drumstick--floorLeft")

const positionTicks = (instrument, stick) => {
  // Necesito la posicion del instrumento a donde se moverá el element
  const coords = instrument.getBoundingClientRect()
  // obtengo la coordenada del centro del instrumento
  const center = coords.width / 2

  // obtengo la distancia respecto al  contenedor padre
  const posicionTop = instrument.offsetTop;
  const posicionLeft = instrument.offsetLeft;

  // posiciono el stick 
  stick.style.top = center + posicionTop + "px"
  stick.style.left = center + posicionLeft + "px"
  stick.style.zIndex = 5

}

// SNARE
positionTicks(snare, stickSnareLeft)
positionTicks(snare, stickSnareRight)
// TOM1
positionTicks(tomOne, stickTom1Left)
positionTicks(tomOne, stickTom1Right)
// TOM2
positionTicks(tomTwo, stickTom2Left)
positionTicks(tomTwo, stickTom2Right)
// TOM3
positionTicks(tomThree, stickTom3Left)
positionTicks(tomThree, stickTom3Right)
// FLOOR
positionTicks(floor, stickFloorLeft)
positionTicks(floor, stickFloorRight)



const playBassDrums = (element) => {
  const audio = element.children[0];
  audio.load();
  audio.play();
  element.classList.add("animation-style");
  setTimeout(() => {
    element.classList.remove("animation-style");
  }, 50);
};

const playCymbals = (element) => {
  const audio = element.children[0];
  audio.load();
  audio.play();
  element.classList.remove("crash-two-hover");

  setTimeout(() => {
    element.classList.add("crash-two-hover");
  }, 1);
};

document.addEventListener("keypress", function (event) {
  //Drums start
  if (event.code == "KeyP") {
    playBassDrums(kick);
  }

  if (event.code == "KeyA") {
    playBassDrums(tomOne);
  }

  if (event.code == "KeyS") {
    playBassDrums(tomTwo);
  }

  if (event.code == "KeyD") {
    playBassDrums(tomThree);
  }

  if (event.code == "KeyJ") {
    playBassDrums(floor);
  }

  if (event.code == "KeyV") {
    playBassDrums(snare);
  }
  //Cymbals start
  if (event.code == "KeyQ" || event.code == "KeyW") {
    playCymbals(crashOne);
  }

  if (event.code == "KeyT" || event.code == "KeyY") {
    playCymbals(crashTwo);
  }

  if (event.code == "KeyI") {
    playCymbals(ride);
  }

  if (event.code == "KeyX") {
    playCymbals(closeHh);
  }

  if (event.code == "KeyZ") {
    playCymbals(openHh);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  kick.addEventListener("mousedown", () => playBassDrums(kick));
  pedal.addEventListener("mousedown", () => playBassDrums(kick));
  snare.addEventListener("mousedown", () => playBassDrums(snare));
  floor.addEventListener("mousedown", () => playBassDrums(floor));
  tomOne.addEventListener("mousedown", () => playBassDrums(tomOne));
  tomTwo.addEventListener("mousedown", () => playBassDrums(tomTwo));
  tomThree.addEventListener("mousedown", () => playBassDrums(tomThree));
  crashOne.addEventListener("mousedown", () => playCymbals(crashOne));
  crashTwo.addEventListener("mousedown", () => playCymbals(crashTwo));
  ride.addEventListener("mousedown", () => playCymbals(ride));
  closeHh.addEventListener("mousedown", () => playCymbals(closeHh));
  openHh.addEventListener("mousedown", () => playCymbals(openHh));

})

