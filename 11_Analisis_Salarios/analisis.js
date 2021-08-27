function esPar(numero){
    return (numero%2 === 0);
}

const salarios = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salariosOrdenados = salarios.sort(
    function(elementoA, elementoB){
        return elementoA - elementoB;
    }
);


function medianaSalarios (lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const media = (lista[mitad] - lista[mitad - 1])/2
        return media;
    }
    else {
        return lista[mitad];
    }
}


// Mediana del Top 10% -- Splice toma parte del arreglo

const spliceStart = (salariosOrdenados.length * 90)/100;
const spliceCount = salariosOrdenados.length - spliceStart; 
 //Splice Recibe el indice desde donde se empieza a contar (SpliceStart) 
 //y luego recibe la cantida de elementos a captar (SpliceCount)
const salariosTop10 = salariosOrdenados.splice(spliceStart,spliceCount);

console.log("La Mediana de Salarios es  : $" + medianaSalarios(salariosOrdenados));
console.log("La Mediana del Top 10 es   : $" + medianaSalarios(salariosTop10));


