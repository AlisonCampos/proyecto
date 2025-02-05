document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validar nombre (mínimo 3 caracteres)
        const name = document.getElementById("name");
        if (name.value.trim().length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            valid = false;
        }

        // Validar correo electrónico
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("Ingresa un correo electrónico válido.");
            valid = false;
        }

        // Validar teléfono
        const phone = document.getElementById("phone");
        const phonePattern = /^[0-9-]+$/;
        if (!phonePattern.test(phone.value) || phone.value.length < 10) {
            alert("Ingresa un número de teléfono válido (mínimo 10 dígitos).");
            valid = false;
        }

        // Validar edad (debe ser un número válido)
        const age = document.getElementById("age");
        if (age.value <= 0 || isNaN(age.value)) {
            alert("La edad debe ser un número positivo.");
            valid = false;
        }

        // Validar género
        const gender = document.getElementById("gender");
        if (gender.value === "") {
            alert("Selecciona un género.");
            valid = false;
        }

        // Validar mensaje (mínimo 10 caracteres)
        const message = document.getElementById("message");
        if (message.value.trim().length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
