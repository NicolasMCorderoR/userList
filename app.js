document.querySelector('#button-send').addEventListener('click', function(){
    let nameUser = document.querySelector('#user-name').value;
    let ageUser = document.querySelector('#user-age').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({name: nameUser, age: ageUser});

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'listUser.html';
});