var pintas = [
    "♦", "♥", "♠", "♣"
];

var cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
];

var arrayPinta = [];

var arrayValor = [];


function generarValores(cantidad){

    cards.sort(() => Math.random() > 0.5 ? 1 : -1);
    const vCartas = cards.slice(0, cantidad);
    
    return vCartas;
}

function generarPintas(cantidad){

    let vPintas = [];

    for(let i = 0; i < cantidad; i++){

        let n = Math.floor(Math.random()* pintas.length);
        
        vPintas.push(pintas[n]);
    }
    return vPintas;
}

function convertirCartas(arrayFS){

    const arrayCartas = arrayFS.map(i=>String(i));

    for (var i = 0; i < arrayCartas.length; i++){
        var supp = arrayCartas[i];
            switch(supp){ 
                case '1': 
                arrayCartas[i]="A";
                    break;
                case '11': 
                arrayCartas[i]="J";
                    break;
                case '12': 
                arrayCartas[i]="Q";
                    break;
                case '13':
                    arrayCartas[i]="K";
                    break;
        }
    }

    return arrayCartas;
}

function pintarCarta(arrayV, arrayP){

    const cards_Elems = document.getElementById("cards");

    for (var i = 0; i < arrayV.length; i++){ 

        const a = arrayV[i];
        const b = arrayP[i];

        const container = document.createElement("div");

        container.className = "card";
        container.id = i+1;

        //pinta left
        var myNewSpanL = document.createElement("p"); //<p> </p>
        myNewSpanL.className = "pleft"; //define id de <p>
        var x = document.createTextNode(b);//define el texto de <p>
        myNewSpanL.appendChild(x); //adiciona el texto a <p>

        //valor de card
        var myNewSpan = document.createElement("p"); //<p> </p>
        myNewSpan.className = "central"; //define id de <p>
        var y = document.createTextNode(a); //define el texto de <p>
        myNewSpan.appendChild(y); //adiciona el texto a <p>

        //pinta right
        var myNewSpanR = document.createElement("p"); //<p> </p>
        myNewSpanR.className = "pright"; //define id de <p>
        var z = document.createTextNode(b); //define el texto de <p>
        myNewSpanR.appendChild(z); //adiciona el texto a <p>

        container.appendChild(myNewSpanL);
        container.appendChild(myNewSpan);
        container.appendChild(myNewSpanR);

        cards_Elems.appendChild(container);
    }
}

function mostrarCarta() {

    const cantCartas = document.getElementById("nro_cartas").value; 

    arrayValor = generarValores(cantCartas);
    arrayPinta = generarPintas(cantCartas);

    const arrayLast = convertirCartas(arrayValor); // convierto las números a letras

    pintarCarta(arrayLast, arrayPinta);
} 

function selectionSort() {

    var y = 0;

    let vArray2 = [];

    for (let index = 0; index < arrayValor.length; index++) {
        const valor = arrayValor[index];
        vArray2.push(valor);
    }

    const conte = document.getElementById("contenedor");

    var vLog = document.createElement("h3");

    var d = document.createTextNode("Log de cartas ordenadas con Select");

    const lo = document.getElementById("cardsO");

    vLog.appendChild(d);

    lo.appendChild(vLog);
        
    for(let i = 0; i < vArray2.length; i++) {

        let min = i;
        for(let j = i+1; j < vArray2.length; j++){
            if(vArray2[j] < vArray2[min]) {
                min=j; 
            }
        }
        if (min != i) {
            
            let tmp = vArray2[i]; 
            vArray2[i] = vArray2[min];
            vArray2[min] = tmp;   

            const valorDiv = document.createElement("div");

            valorDiv.id = "cards";

            const divV = conte.appendChild(valorDiv);

            const iteracion = y;

            const aPintaOrdenado = ordenarPinta(vArray2);

            aSortF = convertirCartas(vArray2);

            pintarCartaOrdenada(aSortF,aPintaOrdenado,divV,iteracion);

            y = y+1
        }
        
    }
}

function pintarCartaOrdenada(arrayV,aPinta,divV,iter){

    var valorPa = document.createElement("span");

    var c = document.createTextNode(iter);

    valorPa.appendChild(c);

    divV.appendChild(valorPa);

    for (var i = 0; i < arrayV.length; i++){ 

        const a = arrayV[i];
        const b = aPinta[i];

        const container = document.createElement("div");

        container.className = "card";
        container.id = i+1;

        //pinta left
        var myNewSpanL = document.createElement("p"); //<p> </p>
        myNewSpanL.className = "pleft"; //define id de <p>
        var x = document.createTextNode(b);//define el texto de <p>
        myNewSpanL.appendChild(x); //adiciona el texto a <p>

        //valor de card
        var myNewSpan = document.createElement("p"); //<p> </p>
        myNewSpan.className = "central"; //define id de <p>
        var y = document.createTextNode(a); //define el texto de <p>
        myNewSpan.appendChild(y); //adiciona el texto a <p>

        //pinta right
        var myNewSpanR = document.createElement("p"); //<p> </p>
        myNewSpanR.className = "pright"; //define id de <p>
        var z = document.createTextNode(b); //define el texto de <p>
        myNewSpanR.appendChild(z); //adiciona el texto a <p>

        container.appendChild(myNewSpanL);
        container.appendChild(myNewSpan);
        container.appendChild(myNewSpanR);

        divV.appendChild(container);
    }
}

function ordenarPinta(aOrdenado){

    let arrayIndexPinta = [];

    let arrayPintaOrdenadoV = [];

    for (let index = 0; index < aOrdenado.length; index++) {

        const valor2 = aOrdenado[index];
        
        const b = arrayValor.findIndex(k => k === valor2);

        arrayIndexPinta.push(b); 
    }

    for (let index = 0; index < arrayIndexPinta.length; index++) {

        const valor2 = arrayIndexPinta[index];
        
        const c = arrayPinta[valor2];

        arrayPintaOrdenadoV.push(c);
    }

    return arrayPintaOrdenadoV;
}