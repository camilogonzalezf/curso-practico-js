const lista = [1,2,3,4];

function calcularMediana(lista){
    let media; 
    if (lista.length%2 == 0){
        const mitad = lista.length/2;
        media = (lista[mitad] + lista[mitad-1])/2;
    }
    else{
        const mitad = Math.floor(lista.length/2);
        media = lista[mitad];
    }
    return media;
}

