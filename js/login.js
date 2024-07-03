function login() {
    const usuario = document.getElementById('usuario').value;
    const password =  document.getElementById('password').value;

    const req = {
        email: usuario,
        password: password
    };

    //simular enviar al server los datos
    //reqres 
    fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    .then(response => response.json())
    .then(data => {
        if(!data.error) {
            //guardar en localStorage
            localStorage.setItem('USUARIO', data.token);

            //abm/crud
            window.location.href = './crud.html';
        }else {
            alert(data.error);
        }
    });
    
}

document.getElementById('btnLogin').addEventListener('click', login);