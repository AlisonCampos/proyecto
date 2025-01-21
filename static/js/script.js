document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        if (!name || !age || isNaN(age)) {
            event.preventDefault();
            alert("Por favor, completa todos los campos correctamente.");
        }
    });
});
