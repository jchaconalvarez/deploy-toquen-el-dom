import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { playBassDrums, playCymbals, playKickInstrument } from '../src/js/app.js'

describe('Instrument test', () => {
    let dom
    let window
    let document
    let stick

    beforeAll(async () => {
        // Inicializo los fake timer para poder usar el advanceTimersByTime para simular el paso del tiempo
        vi.useFakeTimers()
        // Cargo el DOM
        dom = await JSDOM.fromFile('pages/instrument.html', {
            resources: "usable",
            runScripts: "dangerously",
        })
        window = dom.window
        document = dom.window.document
        stick = document.querySelector(".left-drumstick")
    })

    it("should render css", () => {
        let link = document.querySelector("link")
        expect(link.href).toMatch(/base.css$/)
    })
    it("should render app.js file", () => {
        let scripts = document.querySelectorAll("script")
        let existScriptApp = false
        scripts.forEach((script) => {
            if (script.src.includes("app.js")) existScriptApp = true
        })
        expect(existScriptApp).toBe(true)
    })

    it("should render eleven audio html elements", () => {
        let audios = document.querySelectorAll("audio")
        expect(audios.length).toEqual(11)
    })

    it("should exist the function playBassDrums", () => {
        expect(playBassDrums).toBeDefined()
        expect(typeof playBassDrums).toBe("function")
    })

    it("should exist the function playCymbals", () => {
        expect(playCymbals).toBeDefined()
        expect(typeof playCymbals).toBe("function")
    })
    it("should exist the function playKickInstrument", () => {
        expect(playKickInstrument).toBeDefined()
        expect(typeof playKickInstrument).toBe("function")
    })
    it("should add animation class if playBassDrums is called", async () => {
        const snare = document.querySelector(".instrument-container__snare")
        playBassDrums(snare, stick, 50)
        expect(snare.classList.contains("animation-style")).toBe(true)
        // Simulo el paso del tiempo
        await vi.advanceTimersByTimeAsync(150)
        expect(snare.classList.contains("animation-style")).toBe(false)
    })
    it("should add animation class if playCymballs is called ", async () => {

        const crashOne = document.querySelector(".instrument-container__crash--one")
        const cymbalOneBack = document.querySelector(".cymbal-crash--one-back")
        playCymbals(crashOne, cymbalOneBack, stick, 50)
        expect(cymbalOneBack.classList.contains("hitCrash")).toBe(false)
        // Simulo el paso del tiempo para que se ejecute el setTimeout
        await vi.advanceTimersByTimeAsync(150)
        expect(cymbalOneBack.classList.contains("hitCrash")).toBe(true)
    })
})



