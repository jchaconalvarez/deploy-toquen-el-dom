import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'

// test("numero", () => {
//     expect(1).toBe(1)
// })

describe("page home test", () => {
    let dom
    let window
    let button
    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable", 
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
        button = document.querySelector(".container-home__hero-text-block__primary-button");
        console.log(button.href)
    })

    it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        expect(link.href).toMatch(/base.css$/);
      });
    
    it("should link to about us page", () => {
        expect(button.href).toMatch(/about-us.html$/);
    }) 
})

