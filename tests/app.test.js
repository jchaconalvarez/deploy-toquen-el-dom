import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import * as app from '../src/js/app'

vi.mock('../src/js/app.js', async (importOriginal) => {
    const app = await importOriginal()
    console.log(app)
    return {
        ...app,
        // replace some exports
        playInstrumentSound: vi.fn().mockImplementation(() => { }),
        audioInstances: {
            'ruta_del_audio_kick.mp3': { play: vi.fn(), currentTime: 0 },
            'ruta_del_audio_cymbal.mp3': { play: vi.fn(), currentTime: 0 },
        },
    }
})
describe('Instrument test', () => {
    let dom
    let window
    let document
    let snare
    let stick

    beforeAll(async () => {
        dom = await JSDOM.fromFile('pages/instrument.html', {
            resources: "usable",
            runScripts: "dangerously",
        })
        window = dom.window
        document = dom.window.document
        snare = document.querySelector(".instrument-container__snare")
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

    it.only("", () => {

        // playBassDrums(snare, stick)
        console.log({ playInstrumentSound })
        let a = snare.classList.contain("animate-style")


    })





    it("should exist the function playCymbals", () => {
        expect(playCymbals).toBeDefined()
        expect(typeof playCymbals).toBe("function")
    })
    it("should exist the function playKickInstrument", () => {
        expect(playKickInstrument).toBeDefined()
        expect(typeof playKickInstrument).toBe("function")
    })
})



