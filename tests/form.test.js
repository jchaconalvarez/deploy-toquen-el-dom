import { describe, expect, it, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'


// console.log(nameForm)

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

    test('Form should be sent correctly', () => {
        // Simular valores válidos en los campos del formulario
        let nameForm = document.getElementById('name').value;
        let emailForm = document.getElementById('email').value;
        let consultationForm = document.querySelector('textarea[name="consultation"]').value;
        let contactForm = document.querySelector('#contactForm').value;

        console.log(contactForm)
        console.log(document.getElementById('name').value)
        
        nameForm.value = " ";
        emailForm.value = " " ;
        consultationForm.value = " ";
    
        // Simular el envío del formulario
        contactForm.dispatchEvent(new Event('submit'));
    
        // Verificar que el mensaje de éxito está presente
        const successMessage = document.getElementById('message');
        expect(successMessage.innerHTML).toContain('Formulario enviado correctamente!');
    
        // Verificar que el formulario se ha ocultado
        expect(contactForm.style.display).toBe('none');
    });
})


    