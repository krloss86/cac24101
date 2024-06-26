function ingresarNumero() {
    
    let op = 'S';
    const numeros = [];

    while(op.toUpperCase() === 'S') {
        let valor;
        do {
            valor = leerNumero();
        }while(!validarRango(valor,1,10));

        mostrarTabla(valor);

        numeros.push(valor);

        //debo leer op
        op = prompt('Continuar: [S/N]');
    }

    console.log('numero evaluados:', numeros)
}
function mostrarTabla(n) {
    for(let i=1; i<= 10; i++) {
        console.log(`${n} x ${i} = `, n * i)
    }
}

function validarRango(numero,desde,hasta) {
   return numero >= desde && numero <= hasta;
}

//quiero que salga un numero
function leerNumero() {
    let numero;
    do {
        numero = Number(prompt('Ingrese valor (1-10)'));
    }while(!numero);
    return numero;
}
//do-while
function crear() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoClienteId = document.getElementById('tipoCliente').value;

    console.log(nombre,apellido,email,tipoClienteId)

    const jsonRequest = {
        nombre, 
        apellido,
        email,
        tipoClienteId
    };

    const jsonText = JSON.stringify(jsonRequest);

    fetch('http://localhost:8080/webapp/CrearMovieController',{
        method:'post',
        body: jsonText,
        headers:{
            'Content-Type':'text/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

function invocarAPI() {
    //desactivar
    document.getElementById('api').style.display = 'none';
    fetch('http://localhost:8080/webapp/ListarMoviesController')
    .then(response => response.json())
    .then(data => {
        Filas(data.data)
        //activo boton
        document.getElementById('api').style.display = '';
    });
}
function Filas(filas) {
    const rows = filas.map(x => Fila(x));     

    document.getElementById('datos').innerHTML = rows.join('');
}
function Fila(obj) {
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.email}</td>
            <td>${obj.first_name}</td>
            <td>${obj.last_name}</td>
            <td>
                <img src="${obj.avatar}">
            </td>
        </tr>
    `
}