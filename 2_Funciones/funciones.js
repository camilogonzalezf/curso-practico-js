//CÓDIGO DEL CUADRADO
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

//CÓDIGO DEL TRIANGULO
function perimetroTriangulo(base,lado1,lado2){
    return base + lado1 + lado2;
}

function areaTriangulo(base,altura){
    return base*altura/2;
}

//CÓDIGO DE LA CIRCUNFERENCIA
function perimetroCirculo(radio){
    return 2*Math.PI*radio;
}

function areaCirculo(radio){
    return Math.PI*Math.pow(radio,2);
}