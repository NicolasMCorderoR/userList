document.addEventListener('DOMContentLoaded', function(){
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userList = document.querySelector('#user-list');

    users.forEach(function(user){
        let listItem = document.createElement('li');
        listItem.textContent = 'Nombre:' + user.name + ', Edad:' + user.age;
        userList.appendChild(listItem);
    });

    document.querySelector('#button-return').addEventListener('click', function(){
        window.location.href = 'index.html';
    });
});