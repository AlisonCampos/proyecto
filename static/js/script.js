document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let valid = true;

        // Nombre (solo letras y espacios)
        let name = document.getElementById("name").value;
        if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,50}$/.test(name)) {
            showError("error-name", "Ingrese un nombre válido (solo letras y espacios, mínimo 3 caracteres).");
            valid = false;
        } else {
            clearError("error-name");
        }

        // Correo electrónico
        let email = document.getElementById("email").value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showError("error-email", "Ingrese un correo electrónico válido.");
            valid = false;
        } else {
            clearError("error-email");
        }

        // Teléfono (10 dígitos)
        let phone = document.getElementById("phone").value;
        if (!/^\d{10}$/.test(phone)) {
            showError("error-phone", "Ingrese un número de teléfono válido (10 dígitos).");
            valid = false;
        } else {
            clearError("error-phone");
        }

        // Fecha de nacimiento (no permitir fechas futuras)
        let birthdate = document.getElementById("birthdate").value;
        let today = new Date().toISOString().split("T")[0]; // Obtener fecha actual
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

        // Mensaje (mínimo 10 caracteres)
        let message = document.getElementById("message").value;
        if (message.length < 10) {
            showError("error-message", "El mensaje debe tener al menos 10 caracteres.");
            valid = false;
        } else {
            clearError("error-message");
        }

        // Si la validación falla, no se envía el formulario
        if (!valid) {
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });

    function showError(id, message) {
        document.getElementById(id).innerText = message;
    }

    function clearError(id) {
        document.getElementById(id).innerText = "";
    }
});
