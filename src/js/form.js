document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nameForm = document.getElementById('name').value;
    const emailForm = document.getElementById('email').value;
    const phoneForm = document.getElementById('phone').value;
    const consultationForm = document.querySelector('textarea[name="consultation"]').value;

    if (nameForm == "" || emailForm == "" || consultationForm == "") {
        document.getElementById('message').innerHTML = "<span>X</span>Por favor, complete todos los campos.";
    } else {
        const hola = document.getElementById('message').innerHTML = " <span class = correcto>✓ </span>Formulario enviado correctamente!";
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('message').style.color = "black";
    }
});