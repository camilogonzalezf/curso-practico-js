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

//Interacción con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value); 
    alert(area);  
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const lado2 = document.getElementById("InputTrianguloLado2");
    const base = document.getElementById("InputTrianguloBase");
    const l1 = Number(lado1.value);
    const l2 = Number(lado2.value);
    const b = Number(base.value); 
    const perimetro =  perimetroTriangulo(l1,l2,b);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTrianguloBase");
    const altura = document.getElementById("InputTrianguloAltura");
    alert(areaTriangulo(base.value,altura.value));
}

function calcularPerimetroCirculo(){
    alert(perimetroCirculo(document.getElementById("InputRadio").value).toFixed(3));
}

function calcularAreaCirculo(){
    alert(areaCirculo(document.getElementById("InputRadio").value).toFixed(3));
}