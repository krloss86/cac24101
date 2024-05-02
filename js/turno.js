const turnos = {
    os: 0,
    pre: 0,
    par: 0
};

function sacarTurno(tipo) {
    switch(tipo) {
        case 'os':
            turnos.os++;
        break;
        case 'pre':
            turnos.pre++;
        break;
        case 'par':
            turnos.par++;
        break;
    }
    //turnos[tipo] ++;
    listarTurnos(turnos);
}

function listarTurnos(turnos) {
    //recorrer los atributos del objeto y dibujar los valores
    document.getElementById('turnos').innerHTML = '';

    for(const [key, value] of Object.entries(turnos)) {
        document.getElementById('turnos').innerHTML += 
            `<li>${key.toUpperCase()} - ${value}
            <a href="#">Atender</a></li>`;
    }
}