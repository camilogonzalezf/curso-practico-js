function calcularMedia(lista){

    const suma = lista.reduce(
        function(acumulado = 0, elemento){
            return acumulado + elemento;
        }
    );

    const promedio = suma/lista.length;
    return promedio;
}

