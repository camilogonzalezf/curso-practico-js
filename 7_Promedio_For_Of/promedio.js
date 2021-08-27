function calcularMedia(lista){
    var suma = 0;
    for( var elemento of lista){
        suma = suma + elemento;
    }
    const promedio = suma/lista.length;
    return promedio;
}

