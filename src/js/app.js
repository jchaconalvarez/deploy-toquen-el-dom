const kick = document.querySelector(".instrument-container__kick")
const snare = document.querySelector(".instrument-container__snare")
const floor = document.querySelector(".instrument-container__floor")
const tomOne = document.querySelector(".instrument-container__toom--one")
const tomTwo = document.querySelector(".instrument-container__toom--two")
const tomThree = document.querySelector(".instrument-container__toom--three")
const ride = document.querySelector(".instrument-container__ride")
const closeHh = document.querySelector(".instrument-container__closehh")
const openHh = document.querySelector(".instrument-container__openhh")
const crashOne = document.querySelector(".instrument-container__crash--one")
const crashTwo = document.querySelector(".instrument-container__crash--two")


const playBassDrums=(element)=>{
    const audio = element.children[0]
    audio.load()
    audio.play()
    element.classList.add("animation-style")
    setTimeout(() => {
        element.classList.remove("animation-style")
    },50)
}

const playCymbals=(element)=>{
    const audio = element.children[0]
    audio.load()
    audio.play()
    element.classList.remove("crash-two-hover")
    setTimeout(() => {
        element.classList.add("crash-two-hover")
    },1000)
}


kick.addEventListener("mousedown", () => playBassDrums(kick))
snare.addEventListener("mousedown", () => playBassDrums(snare))
floor.addEventListener("mousedown", () => playBassDrums(floor))
tomOne.addEventListener("mousedown", () => playBassDrums(tomOne))
tomTwo.addEventListener("mousedown", () => playBassDrums(tomTwo))
tomThree.addEventListener("mousedown", () => playBassDrums(tomThree))
crashOne.addEventListener("mousedown", () => playBassDrums(crashOne))
crashTwo.addEventListener("mousedown", () => playBassDrums(crashTwo))
ride.addEventListener("mousedown", () => playBassDrums(ride))
closeHh.addEventListener("mousedown", () => playBassDrums(closeHh))
openHh.addEventListener("mousedown", () => playBassDrums(openHh))