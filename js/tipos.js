//tipos de datos
//crear una persona con nombre, apellido, edad, esArgentina
const nombre = "carlos";

//nombre es un string

const edad = 37;
//son de tipo Number

const esArgentina = 'true';
// es boolean

function saludar () {

}

// tipo de datos?
//console.log(typeof(saludar));

const persona = {
    nombre: "juan",
    edad: edad,
    fx: saludar,
    esArgentina: esArgentina
}

//object
//console.log(typeof(persona));
//console.log(typeof(persona.fx));
//console.log(typeof(persona.esArgentina));


//D.O.M
//funciones
function calcular () {
    const a = Number(document.getElementById('valorA').value);
    const b = parseInt(obtenerPorId('valorB').value);
    
    //a > b?
    //scope
    const res = obtenerPorId('comparacion');
    
    if (a > b) {
        //actualizo el innerText 
        res.innerText = 'A es Mayor que B';
    }
    if(a < b) {
        res.innerText = 'A es Menor que B';
    }
    if(a === b) {
        res.innerText = 'A es Igual que B';
    }
}

function obtenerPorId(htmlId) {
    return document.getElementById(htmlId);
}
