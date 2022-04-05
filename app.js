let pinta = [
    "♦", "♥", "♠", "♣"
];

let cards = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
];

let arrayPinta = [];

let arrayValor = [];


let arra = [];

let arraySort = [];

let arrayFinal = [];

let arrayFSort = [];

let arrayOrdenado = [];

let arraySortF = [];



let arrayPintaOrdenado = [];

let arrayPintaOrdenadoV = [];

let arrayS = [];

function generaPinta (){
    let pt = Math.floor(Math.random()* pinta.length);
    //console.log(pt);
    let valorPinta = pinta[pt];
    //console.log(valorPinta);
    return valorPinta;
}

function generaNumero (){
    let nr = Math.floor(Math.random()* cards.length);
    //console.log(nr);
    let valor = cards[nr];
    //console.log(valor);
    return valor;
}

function crearCarta(){

    const cantidad_Elems = document.getElementById("nro_cartas").value; 

    for (let index = 0; index < Number(cantidad_Elems); index++) {
        const b = generaNumero();
        const a = generaPinta();

        arrayPinta.push(a);
        arrayValor.push(b);
    }
}

function mostrarCarta() {

    crearCarta(); //creo array Valores y Pinta

    arraySortF = convertirCartas(arrayValor); // convierto las cartas a letras

    const cards_Elems = document.getElementById("cards");

    pintarCarta(arraySortF, arrayPinta, cards_Elems);
} 


function selectionSort(vArray) { 
    let n = vArray.length;
        
    for(let i = 0; i < n; i++) {

        console.log(i);

        let min = i;
        for(let j = i+1; j < n; j++){
            if(vArray[j] < vArray[min]) {
                min=j; 
            }

        }
        if (min != i) {
            
            let tmp = vArray[i]; 
            vArray[i] = vArray[min];
            vArray[min] = tmp;  
            
        }
        console.log(vArray);  
        
    }
    return vArray;
}


function convertirCartas(arrayFS){

    arrayFSort = arrayFS.map(i=>String(i));

    for (var i = 0; i < arrayFSort.length; i++){
        var supp = arrayFSort[i];
            switch(supp){ 
                case '1': 
                    arrayFSort[i]="A";
                    break;
                case '11': 
                    arrayFSort[i]="J";
                    break;
                case '12': 
                    arrayFSort[i]="Q";
                    break;
                case '13':
                    arrayFSort[i]="K";
                    break;
        }
    }

    return arrayFSort;
}

function pintarCarta(arrayV, arrayP, valorDiv){

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

        valorDiv.appendChild(container);
    }
}

function ordenarPinta(aValor){

    let arrayP2 = [];

    for (let index = 0; index < aValor.length; index++) { 

        const valor = aValor[index];

        arrayP2.push(valor);    //creo array de valores 
    }

    arrayOrdenado = selectionSort(aValor); // ordeno array

    for (let index = 0; index < arrayP2.length; index++) {

        const valor2 = arrayP2[index];
        
        const b = arrayOrdenado.findIndex(k => k === valor2);

        arrayPintaOrdenado.push(b); //creo array de pinta ordenado
    }

    for (let index = 0; index < arrayPintaOrdenado.length; index++) {

        const val = arrayPintaOrdenado[index];
        
        const c = arrayPinta[val];

        arrayPintaOrdenadoV.push(c); //creo array de valores de pinta ordanado
    }

    return arrayPintaOrdenadoV;
}

function mostrarCartaOrdenadas(){

    let aPintaOrdenado = ordenarPinta(arrayValor);

    arraySortF = convertirCartas(arrayOrdenado); // convierto las cartas a letras

    const cards_Elems = document.getElementById("cards2");

    pintarCarta(arraySortF, arrayPintaOrdenadoV, cards_Elems);
} 
