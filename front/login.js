var btnLogIn = document.getElementById('login');
var linkToSignup = document.getElementById('for-new-client');
function login() {
    console.log('Button clicked');
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var data = {
        name: name,
        password: password
    };
    
    var request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, // Исправлено 'aplication/json' на 'application/json'
        body: JSON.stringify(data)
    };

    fetch('https://example.com/login', request)
        .then(response => response.json()) // Исправлено respons на response
        .then(data => {
            console.log('Success:', data); // Обработка успешного ответа
        })
        .catch((error) => {
            console.error('Error:', error); // Обработка ошибок
             linkToSignup.textContent = "Зарегистрироваться";
        });
}

btnLogIn.addEventListener('click', login);

