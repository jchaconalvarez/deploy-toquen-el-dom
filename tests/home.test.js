import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'

// test("numero", () => {
//     expect(1).toBe(1)
// })

describe("page home test", () => {
    let dom
    let window
    let button
    let buttonInstrument
    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable", 
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
        button = document.querySelector(".container-home__hero-text-block__primary-button");
        buttonInstrument = document.querySelector(".green .container-home__gallery__row__card__secondary-button");
        console.log(buttonInstrument)
    })

    it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        expect(link.href).toMatch(/base.css$/);
      });
    
    it("should link to about us page", () => {
        expect(button.href).toMatch(/about-us.html$/);
    }) 

    it("should link to instrument page", () => {
        expect(buttonInstrument.href).toMatch(/instrument.html$/);   
    }) 

    it("should link to piano in construction page", () => {
        let buttonPiano = document.querySelector(".violet .container-home__gallery__row__card__secondary-button")
        expect(buttonPiano.href).toMatch(/in-construccion-piano.html$/);  

    }) 

    it("should link to accordeon in construction page", () => {
        let buttonAccordeon = document.querySelector(".brown .container-home__gallery__row__card__secondary-button")
        expect(buttonAccordeon.href).toMatch(/in-construction-accordeon.html$/);  

    }) 

    it("should link to guitar in construction page", () => {
        let buttonGuitar = document.querySelector(".red .container-home__gallery__row__card__secondary-button")
        expect(buttonGuitar.href).toMatch(/in-construction-guitar.html$/);  

    }) 

})


