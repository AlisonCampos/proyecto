document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let valid = true;

        // Nombre (no acepta solo espacios, mínimo 3 caracteres)
        let name = document.getElementById("name").value.trim();
        if (name === "" || !/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{3,50}(?: [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$/.test(name)) {
            showError("error-name", "Ingrese un nombre válido (solo letras y espacios intermedios, mínimo 3 caracteres).");
            valid = false;
        } else {
            clearError("error-name");
        }

        // Correo electrónico (no permite espacios)
        let email = document.getElementById("email").value.trim();
        if (email === "" || /\s/.test(email) || !/^\S+@\S+\.\S+$/.test(email)) {
            showError("error-email", "Ingrese un correo electrónico válido.");
            valid = false;
        } else {
            clearError("error-email");
        }

        // Teléfono (10 dígitos, no permite espacios)
        let phone = document.getElementById("phone").value.trim();
        if (phone === "" || /\s/.test(phone) || !/^\d{10}$/.test(phone)) {
            showError("error-phone", "Ingrese un número de teléfono válido (10 dígitos sin espacios).");
            valid = false;
        } else {
            clearError("error-phone");
        }

        // Fecha de nacimiento (no permitir fechas futuras)
        let birthdate = document.getElementById("birthdate").value;
        let today = new Date().toISOString().split("T")[0];
        if (birthdate === "" || birthdate >= today) {
            showError("error-birthdate", "Ingrese una fecha de nacimiento válida.");
            valid = false;
        } else {
            clearError("error-birthdate");
        }

        // Género (debe seleccionarse)
        let gender = document.getElementById("gender").value;
        if (gender === "") {
            showError("error-gender", "Seleccione una opción.");
            valid = false;
        } else {
            clearError("error-gender");
        }

        // Mensaje (mínimo 10 caracteres, no puede ser solo espacios)
        let message = document.getElementById("message").value.trim();
        if (message === "" || message.length < 10) {
            showError("error-message", "El mensaje debe tener al menos 10 caracteres y no puede estar vacío.");
            valid = false;
        } else {
            clearError("error-message");
        }

        // Si la validación falla, prevenir el envío del formulario
        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(id, message) {
        document.getElementById(id).innerText = message;
    }

    function clearError(id) {
        document.getElementById(id).innerText = "";
    }
});
