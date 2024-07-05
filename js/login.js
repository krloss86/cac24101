function login() {
    const usuario = document.getElementById('usuario').value;
    const password =  document.getElementById('password').value;

    const req = {
        username: usuario,
        password: password
    };

    //simular enviar al server los datos
    //reqres 
    //fetch('https://reqres.in/api/login',{
    fetch('http://localhost:8080/webapp/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    .then(response => console.log(response))
    .then(data => {
        //guardar en localStorage
        localStorage.setItem('USUARIO', usuario);

        //abm/crud
        window.location.href = './crud.html';
        
    }).catch(err => {
        console.log(err)
    });
    
}

document.getElementById('btnLogin').addEventListener('click', login);