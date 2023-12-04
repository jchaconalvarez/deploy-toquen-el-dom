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
    })

    it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        expect(link.href).toMatch(/base.css$/);
      });

    it("logo should link to home"), () => {
        let linkLogo = document.querySelector(".header a")
        expect(linkLogo.href).toMatch(/index.html$/);
    }

    it("instruments link should link to instruments page"), () => {
        let linkInstruments = document.querySelector("header__navbar--container-instruments")
        expect(linkInstruments.href).toMatch(/instrument.html$/);
    }

    it("about us link should link to about us page"), () => {
        let linkAbout = document.querySelector("header__navbar--container-about")
        expect(linkAbout.href).toMatch(/about-us.html$/);
    }

     it("contact link should link to contact page"), () => {
        let linkContact = document.querySelector("header__navbar--container-contact")
        expect(linkContact.href).toMatch(/contact.html$/);
    }
    
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

    it("Instagram button should link to instagram page", () => {
        let linkInstagram = document.querySelector(".icons-footer a:first-child")
        expect(linkInstagram.href).toEqual("https://www.instagram.com/");  

    }) 

    it("Twitter button should link to twitter page", () => {
        let linkTwitter = document.querySelector(".icons-footer a:nth-child(2)")
        expect(linkTwitter.href).toEqual("https://twitter.com/?lang=es");  

    })
    
    it("Facebook button should link to facebook page", () => {
        let linkFacebook = document.querySelector(".icons-footer a:nth-child(3)")
        expect(linkFacebook.href).toEqual("https://www.facebook.com/");  

    })

    it("LinkedIn button should link to LinkedIn page", () => {
        let linkLinkedIn = document.querySelector(".icons-footer a:nth-child(4)")
        expect(linkLinkedIn.href).toEqual("https://www.linkedin.com/");  

    })

    it("YouTube button should link to YouTube page", () => {
        let linkYouTube = document.querySelector(".icons-footer a:nth-child(5)")
        expect(linkYouTube.href).toEqual("https://www.youtube.com/");  

    })
})




