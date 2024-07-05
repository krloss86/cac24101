let lista = [];

function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = ''
    document.getElementById('email').value = ''
    document.getElementById('tipoCliente').value = ''
    //guardo el id del registro que quiero editar
    document.getElementById('id').value = '';
}

function crear() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoClienteId = document.getElementById('tipoCliente').value;

    const id = document.getElementById('id').value;

    console.log(nombre,apellido,email,tipoClienteId)
    if(!nombre || !apellido || !email || !tipoClienteId) {
        alert('Complete todos los campos')
        return;
    }
    

    const jsonRequest = {
        id,
        nombre, 
        apellido,
        email,
        tipoClienteId
    };

    const jsonText = JSON.stringify(jsonRequest);
    const endpoint = id ? 'ModificarMovieController' : 'CrearMovieController';
    fetch(`http://localhost:8080/webapp/${endpoint}`,{
        method:'post',
        body: jsonText,
        headers:{
            'Content-Type':'text/json'
        }
    })
    .then(response => console.log(response))
    .then(data => {
        limpiar();
        listar()
    }
    );
}

function listar() {
    fetch('http://localhost:8080/webapp/ListarMoviesController')
    .then(response => response.json())
    .then(data => {
        Filas(data)
        lista = data;
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
function editar(id) {
    const fila = lista.find(l => l.id === id);
    
    document.getElementById('nombre').value = fila.nombre;
    document.getElementById('apellido').value = fila.apellido;
    document.getElementById('email').value = fila.email;
    document.getElementById('tipoCliente').value = fila.tipoClienteId;
    //guardo el id del registro que quiero editar
    document.getElementById('id').value = fila.id;
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
                <a href="#" onclick="editar(${obj.id})">E</a>
            </td>
        </tr>
    `
}

//al cargar la pagina
listar();