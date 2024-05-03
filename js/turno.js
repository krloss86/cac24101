const turnos = JSON.parse(localStorage.getItem('listado') || '[]');

function sacarTurno(tipo) {

    //capturar el dni
    const dni = document.getElementById('dni').value;

    //validar
    if(dni.trim() === '') {
        alert('Ingrese dni');
        return ;
    }

    //crear un objeto y ponerlo en el array
    const turno = {
        dni: dni,
        tipo: tipo,
        fechaInicio: null
    };

    //agrego el dato al array
    turnos.push(turno);

    listarTurnos(turnos);

    //guarda localmente un array con los turnos
    localStorage.setItem('listado', JSON.stringify(turnos));

    document.getElementById('dni').value = '';
    document.getElementById('dni').focus();
}

function listarTurnos(turnos) {
    const sinAtender = turnos.filter(x => !x.fechaInicio);

    //recorrer los atributos del objeto y dibujar los valores
    document.getElementById('turnos').innerHTML = '';


    for(const turno of sinAtender) {
        document.getElementById('turnos').innerHTML += 
            `<li id='${turno.dni}'>${turno.dni} - ${turno.tipo}
            <a href="#" onclick="atender('${turno.dni}')">Atender</a></li>`;
    }

    const atendidos = turnos.filter(x => x.fechaInicio && !x.fechaFin);

    //recorrer los atributos del objeto y dibujar los valores
    document.getElementById('atendidos').innerHTML = '';

    for(const turno of atendidos) {
        document.getElementById('atendidos').innerHTML += 
            `<li id='atendidos-${turno.dni}'>${turno.dni} - ${turno.tipo}
            <a href="#" onclick="finalizar('${turno.dni}')">Finalizar</a></li>`;
    }
}

function atender(dni) {    
    const turno = turnos.find(x => x.dni === dni);
    turno.fechaInicio = Date().toString();
    listarTurnos(turnos);
    localStorage.setItem('listado', JSON.stringify(turnos));
}

function finalizar(dni) {
    const turno = turnos.find(x => x.dni === dni);
    turno.fechaFin = Date().toString();
    listarTurnos(turnos);
    localStorage.setItem('listado', JSON.stringify(turnos));
}

listarTurnos(turnos);

//usar metodos de arrays
/*
.filter(): filtra datos de un array
.map(): aplica a cada elemento del array una funcion
.splice(indice): eliminar un elemento del array
.find(): busca un elemento
.findIndex(): busca un elemento
.indexOf()
.forEach()
*/

const array = [1,2,3,4,8];
//             0 1 2 3 4
for(let i=0;i<array.length;i++) {
    console.log(array[i])
}
array.forEach(x => console.log(x))
array.findIndex(x => x === 5);
array.filter(x => x >= 3);// [3,4]
array.filter(x => x !== 4);//[1,2,3]
array.splice(2);//es indice 2
array.splice(array.findIndex(x => 8));
