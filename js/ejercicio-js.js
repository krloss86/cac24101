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
    .then(response => console.log(response))
    .then(data => 
        listar()
    );
}

function listar() {
    //desactivar
    document.getElementById('api').style.display = 'none';
    fetch('http://localhost:8080/webapp/ListarMoviesController')
    .then(response => response.json())
    .then(data => {
        Filas(data)
        //activo boton
        document.getElementById('api').style.display = '';
    });
}
function Filas(filas) {
    const rows = filas.map(x => Fila(x));     

    document.getElementById('datos').innerHTML = rows.join('');
}

function eliminar(id) {
    const eliminar = confirm('¿Eliminar?');//true|false
    if(eliminar) {
        fetch(`http://localhost:8080/webapp/EliminarMovieController?id=${id}`,{
            method:'delete',
        }).then(response => listar());
    }
}

function Fila(obj) {
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.email}</td>
            <td>${obj.nombre}</td>
            <td>${obj.apellido}</td>
            <td>
                <img src="${obj.avatar}">
            </td>
            <td>
                <a href="#" onclick="eliminar(${obj.id})">X</a>
            </td>
        </tr>
    `
}

//al cargar la pagina
listar();