

export let audioInstances = {};
const positionTicks = (instrument, stick, space = 0) => {
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
  console.log({ instrument, stick })

}

const playInstrumentSound = (instrument) => {
  // Recupero el audio previamente cargado en el onload

  const audioSrc = instrument.children[0].src
  let audio = audioInstances[audioSrc];
  console.log({ audio, audioSrc, audioInstances })
  audio.currentTime = 0;
  audio.play();
}

const animateStick = (stick) => {
  stick.classList.add("drumstickAnimate")
  setTimeout(() => {
    stick.classList.remove("drumstickAnimate")
  }, 150);
}

const animateKickAndToms = (instrument) => {
  instrument.classList.add("animation-style");
  setTimeout(() => {
    instrument.classList.remove("animation-style");
  }, 150);
}

const animateCymbals = (instrument, imgBack) => {
  instrument.classList.remove("hitCrashBack");
  imgBack.classList.remove("hitCrash")
  setTimeout(() => {
    instrument.classList.add("hitCrashBack");
    imgBack.classList.add("hitCrash")
  }, 150);
}

const animationKick = (head, body, instrument) => {
  head.classList.remove("hitBeater");
  body.classList.remove("hitPedal");
  instrument.classList.add("animation-style");
  setTimeout(() => {
    head.classList.add("hitBeater");
    body.classList.add("hitPedal");
    instrument.classList.remove("animation-style");
  }, 150)
}

const playKickInstrument = (head, body, instrument) => {
  playInstrumentSound(instrument)
  animationKick(head, body, instrument)
}

const playBassDrums = (instrument, stick, space = 0) => {
  positionTicks(instrument, stick, space)
  playInstrumentSound(instrument)
  animateStick(stick)
  animateKickAndToms(instrument)
};

const playCymbals = (instrument, imgBack, stick, space = 0) => {
  playInstrumentSound(instrument)
  positionTicks(instrument, stick, space)
  animateStick(stick)
  animateCymbals(instrument, imgBack)
};


document.addEventListener("DOMContentLoaded", () => {


  let audioElements = document.querySelectorAll('audio');

  audioElements.forEach((audioElement) => {
    const ulrAudio = audioElement.src
    let audio = new Audio(ulrAudio); // te crea un elemento audio

    audio.load();
    audioInstances[ulrAudio] = audio;

  });

  const kick = document.querySelector(".instrument-container__kick");

  const snare = document.querySelector(".instrument-container__snare");
  const floor = document.querySelector(".instrument-container__floor");
  const tomOne = document.querySelector(".instrument-container__toom--one");
  const tomTwo = document.querySelector(".instrument-container__toom--two");
  const tomThree = document.querySelector(".instrument-container__toom--three");
  //aqui estan las constantes de la animacion
  const ride = document.querySelector(".instrument-container__ride");
  const rideBack = document.querySelector(".cymbal-ride-back");

  const closeHh = document.querySelector(".instrument-container__closehh");
  const closeHhBack = document.querySelector(".cymbal-closehh-back");

  const openHh = document.querySelector(".instrument-container__openhh");
  const openHhBack = document.querySelector(".cymbal-openhh-back");

  const crashOne = document.querySelector(".instrument-container__crash--one");
  const crashOneBack = document.querySelector(".cymbal-crash--one-back");

  const crashTwo = document.querySelector(".instrument-container__crash--two");
  const crashTwoBack = document.querySelector(".cymbal-crash--two-back");

  const pedal = document.querySelector(".instrument-container__pedal");
  const headPedal = document.querySelector(".head-pedal");
  const bodyPedal = document.querySelector(".pedal-face");
  //Baquetas
  const rightStick = document.querySelector(".right-drumstick")
  const leftStick = document.querySelector(".left-drumstick")



  kick.addEventListener("mousedown", () => playKickInstrument(headPedal, bodyPedal, kick));
  pedal.addEventListener("mousedown", () => playKickInstrument(headPedal, bodyPedal, kick));
  snare.addEventListener("mousedown", () => playBassDrums(snare, rightStick));
  floor.addEventListener("mousedown", () => playBassDrums(floor, rightStick));
  tomOne.addEventListener("mousedown", () => playBassDrums(tomOne, rightStick));
  tomTwo.addEventListener("mousedown", () => playBassDrums(tomTwo, rightStick));
  tomThree.addEventListener("mousedown", () => playBassDrums(tomThree, rightStick));
  crashOne.addEventListener("mousedown", () => playCymbals(crashOne, crashOneBack, rightStick));
  crashTwo.addEventListener("mousedown", () => playCymbals(crashTwo, crashTwoBack, rightStick));
  ride.addEventListener("mousedown", () => playCymbals(ride, rideBack, rightStick));
  closeHh.addEventListener("mousedown", () => playCymbals(closeHh, closeHhBack, rightStick));
  openHh.addEventListener("mousedown", () => playCymbals(openHh, openHhBack, rightStick));
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
      playCymbals(crashOne, crashOneBack, leftStick, 50);
    }

    if (event.code == "KeyT" || event.code == "KeyY") {
      playCymbals(crashTwo, crashTwoBack, leftStick, 50);
    }

    if (event.code == "KeyI") {
      playCymbals(ride, rideBack, leftStick, 50);
    }

    if (event.code == "KeyX") {
      playCymbals(closeHh, closeHhBack, leftStick, 50);
    }

    if (event.code == "KeyZ") {
      playCymbals(openHh, openHhBack, leftStick, 50);
    }
  });

})
export { playBassDrums, playCymbals, playKickInstrument, playInstrumentSound }