const lista = [1,2,3,4,5,1,2,3,4,5,1,1,1,3,3,3,7,7,7,8,9,0];
let listCount = {}; //Objeto vacío
function contarElementos(lista){
    lista.map(
        function(elemento){
            if(!listCount[elemento]){ //Crea el elemento del objeto SINO EXISTE 
                listCount[elemento] = 1;
            } 
            else {
                listCount[elemento] +=1; //Cuenta el Elemento SI EXISTE
            }
        }
    );
    return listCount;
}

function calcularModa(){
    const listado = contarElementos(lista);

    const ordenada = Object.entries(listado).sort( //Object.entries convierte objeto a array
        function(elementoA, elementoB){ //Argumentos que espera el método SORT
            return elementoA[1] - elementoB[1]; //Espera números negativos y positivos para ordenar
        }
    )

    console.log(ordenada [ordenada.length - 1]); //Muestra el último elemento 
}


