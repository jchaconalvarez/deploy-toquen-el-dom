// 
const validateFields = (name, email, consultation) => {
    if (name === "" || email === "" || consultation === "") return false
    return true
}

export const handleSubmit = (name, email, consultation, contactForm, message) => {
    const areFilledFields = validateFields(name, email, consultation)
    if (areFilledFields) {
        contactForm.style.display = 'none';
        message.style.color = "black";
        message.innerHTML = " <span class = correcto>✓ </span>Formulario enviado correctamente!";
    } else {
        message.innerHTML = "<span>X</span>Por favor, complete todos los campos."

    }

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault()
        const nameForm = document.getElementById('name');
        const emailForm = document.getElementById('email').value;
        const contactForm = document.getElementById('contactForm')
        const message = document.getElementById('message')
        const consultationForm = document.querySelector('textarea[name="consultation"]').value;
        handleSubmit(nameForm, emailForm, consultationForm, contactForm, message);
    })

})