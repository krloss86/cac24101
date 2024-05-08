const arraysCards = [];

function main() {
    //simular la carga de datos en el array (Rest API)
    arraysCards.push(
        {
            id: Math.random(),
            title: 'Mi gato Persa',
            description: 'Gato de pelo largo hermoso',
            imageSrc: '../imgs/persa.jpg'
        },
        {
            id: Math.random(),
            title: 'Mi gato Persa 2',
            description: 'Gato de pelo corto',
            imageSrc: '../imgs/persa.jpg'
        }
    );

    //llamo la funcion Cards(arrays)
    Cards(arraysCards);
}

function Cards(cards) {

    //iterar las Cards y por cada uno dibujar un Card
    /*for(let aCard of cards) {
        document.getElementById('cards').innerHTML += Card(aCard);
    }*/

    //usado la funcion .map() + .join( )
    const htmlCards = cards.map(aCard => Card(aCard));
    
    document.getElementById('cards').innerHTML = htmlCards.join('');
}

function Card(card) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${card.imageSrc}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">
                    ${card.title}
                </h5>
                <p class="card-text">
                    ${card.description}
                </p>
                <a href="#" 
                    class="btn btn-primary"
                    onclick="details(${card.id})">
                    Ver detalle
                </a>
            </div>
        </div>
    `;
}

function details(id) {
    const obj = arraysCards.find(x => x.id === id);
    
    //capturo el h1
    document.getElementById('exampleModalLabel').innerHTML = obj.title;

    //capturo el div del contenido
    document.getElementById('exampleModalContent').innerHTML = `<b>${obj.description}</b>`;

    //mostrar el modal!!!
    const myModal = new bootstrap.Modal('#exampleModal', {
        keyboard: false
    });

    myModal.show();
}

function add() {
    //alert("hacer magia")

    //hacerlo bien!!
    arraysCards.push({
        id: Math.random(),
        title: 'Mi gato Persa 3',
        description: 'Gato de sin pelos',
        imageSrc: '../imgs/persa.jpg'
    });

    Cards(arraysCards)
}
//cuando se carga la pagina se invoca
main();