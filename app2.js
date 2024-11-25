document.addEventListener('DOMContentLoaded', function() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userLists = document.querySelector('#user-lists');

    // Recorrer los usuarios guardados en localStorage
    users.forEach(function(user) {
        let listItem = document.createElement('li');
        listItem.textContent = 'Nombre: ' + user.name + ', Correo electrónico: ' + user.email + ', Mensaje: ' + user.message;
        userLists.appendChild(listItem);  // Aquí se corrigió el nombre de la variable de "userList" a "userLists"
    });

    // Volver a la página de inicio
    document.querySelector('#button-return').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
