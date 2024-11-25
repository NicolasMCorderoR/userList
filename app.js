// Obtener el formulario y escuchar el evento de envío
document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    // Capturar los datos del formulario
    let userName = document.querySelector('#text-name-user').value;
    let userEmail = document.querySelector('#text-email-user').value;
    let userMessage = document.querySelector('#text-message-user').value;

    // Obtener o inicializar la lista de usuarios en localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Agregar los datos actuales al almacenamiento local
    users.push({ name: userName, email: userEmail, message: userMessage });

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir a la página de usuarios
    window.location.href = './listUser.html';
});
