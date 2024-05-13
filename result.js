document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    if (username === 'nadzapi' && password === '12345') {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});