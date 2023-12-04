import { describe, expect, it, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { handleSubmit } from '../src/js/form'
describe("contact page test", () => {
    let dom
    let window

    beforeAll(async () => {
        dom = await JSDOM.fromFile("pages/contact.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
    })

    it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        expect(link.href).toMatch(/base.css$/);
    });

    test('should show a success message if fields are filled', () => {
        // Simular valores válidos en los campos del formulario
        let nameForm = document.getElementById('name');
        let emailForm = document.getElementById('email');
        let consultationForm = document.querySelector('textarea[name="consultation"]');
        let contactForm = document.querySelector('#contactForm');
        let message = document.getElementById('message')

        nameForm = "test"
        emailForm = "test@gmail.com"
        consultationForm = "Quiero info..."

        handleSubmit(nameForm, emailForm, consultationForm, contactForm, message)

        // Verificar que el formulario se ha ocultado
        expect(message.innerHTML).toMatch(/Formulario enviado correctamente!/);
    });
    test('should show a error message if fields are empty', () => {
        // Simular valores válidos en los campos del formulario
        let nameForm = document.getElementById('name');
        let emailForm = document.getElementById('email');
        let consultationForm = document.querySelector('textarea[name="consultation"]');
        let contactForm = document.querySelector('#contactForm');
        let message = document.getElementById('message')

        nameForm = ""
        emailForm = "test@gmail.com"
        consultationForm = "Quiero info..."

        handleSubmit(nameForm, emailForm, consultationForm, contactForm, message)

        // Verificar que el formulario se ha ocultado
        expect(message.innerHTML).toMatch(/Por favor, complete todos los campos/);
    });
})


