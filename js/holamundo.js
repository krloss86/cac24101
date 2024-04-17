//base de js
/*
    comentario de varias lineas
*/
/*puedo capturar el boton desde javascript
y agregarle funcionalidad*/
//alert("hola mundo")

//capturar el boton buscar por su id del boton
const botonEnHTML = document.getElementById('btnBuscar');
//agrego un evento click 

//asigno evento click a la accion/funcion buscar
botonEnHTML.addEventListener('click',buscar)
//cada linea termina en ;

//crear la accion=funcion buscar
function buscar() {
    
    //capturar el input por su id
    const txtEnHTML = document.getElementById('txt');
    
    //obntengo el valor de input
    const valorDelInput = txtEnHTML.value;

    //concatenar 
    //alert('buscando ' + valorDelInput);

    document.write('buscando ' + valorDelInput)
}