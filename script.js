function showLogin() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function login(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica de autenticación
    alert('Inicio de sesión exitoso');
    showMenu();
}

function showMenu() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}