/*
Dada la edad una persona, determinar si es mayor de edad
*/

function determinar() {
    //obtener la refencia al input html 
    const edadEnHtml = document.getElementById('edad');
    
    const edad = Number(edadEnHtml.value);

    //como quiero validar que exista un valor
    //Guards
    if(!edad)  {
        edadEnHtml.classList.add('error');
        return;
    }else {
        edadEnHtml.classList.remove('error');
    }
    
    //invoco la funcion con el parametro
    if(esMayorDeEdad(edad)) {
        //tomar el div y actualizar su innerText || innertHTML
        document.getElementById('resultado').innerHTML = '<b>es mayor</b>'
    }else {
        document.getElementById('resultado').innerText = 'es menor'
    }   
}

/*
    si edad < 18 => false
    si edad => 18 => true
*/
function esMayorDeEdad(valor) {
    return valor >= 18;//true || false
}

/*document.getElementById('calcular')
    .addEventListener('click',determinar);*/

function agregar()  {

}

document.getElementById('calcular')
    .addEventListener('click',agregar);

/*
    pre-condicion: lista debe ser un vector
    return: undefined si la lista es vacia o nula o no definida
    number: es mayor
*/
const lista = [];

function agregar() {
    lista.push(obtenerEdad());
    actualizarListaEnHTML(lista);
    limpiar();
    enfocar()

    //guardar la lista en localStorage
    localStorage.setItem('lista',lista);
    //para poder tomarlo y volver a "dibuar" los datos en html
}
function obtenerEdad() {
    return Number(document.getElementById('edad').value);
}
function actualizarListaEnHTML(lista) {
    if(lista.length) {
        document.getElementById('resultado').innerText = lista;
    }else {
        document.getElementById('resultado').innerText = '';
    }

}

function enfocar () {
    document.getElementById('edad').focus();
}

function limpiar() {
    document.getElementById('edad').value = '';
}

function limpiarTodo() {
    //usar un ciclo while
    vaciarLista(lista); // > aca la lista queda vaciar
    //html vacio > 
    actualizarListaEnHTML(lista);

    //borrar localStorage
    localStorage.removeItem('lista');
}

function vaciarLista(lista) {
    while(lista.length) {
        lista.pop();//
    }
}

function calcularMayor() {
    if(!lista?.length) {
        return undefined;
    }
    
    //ahora si puedo calcualar mayor
    let mayor = lista[0];

    //y ahora?
    for (let i=1;i < lista.length; i++) {
        //??? que hago ahora???
        if(lista[i] > mayor) {
            mayor = lista[i];
        }
    }
    alert(mayor)
    return mayor;
}

function calcularMenor() {
    if(!lista?.length) {
        return undefined;
    }
    
    //ahora si puedo calcualar mayor
    let mayor = lista[0];

    //y ahora?
    for (let i=1;i < lista.length; i++) {
        //??? que hago ahora???
        if(lista[i] < mayor) {
            mayor = lista[i];
        }
    }
    alert(mayor)
    return mayor;
}

function main() {
    //1-obtengo el listado del localStorage
    const listadoEnLocal = localStorage.getItem('lista');
    
    //2-actualizo la lista en el html
    actualizarListaEnHTML(listadoEnLocal);

    //3-cargo la lista
    lista.push(listadoEnLocal);
}

//llamo a main
main();