//CÓDIGO DEL CUADRADO

console.group("Cuadrado");
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado son : " + ladoCuadrado+ "cm");
    const perimetroCuadrado = ladoCuadrado*4;
    console.log("El perímetro del Cuadrado es: " + perimetroCuadrado + "cm");
    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//CÓDIGO DEL TRIANGULO
console.group("Triangulos");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;
    console.log(`Los lados del triángulo son  : 
        Lado 1: ${ladoTriangulo1} cm
        Lado 2: ${ladoTriangulo2} cm
        Base  : ${baseTriangulo} cm
        Altura: ${alturaTriangulo} cm`)

    const perimetroTriangulo = ladoTriangulo2 + ladoTriangulo1 + baseTriangulo;
    console.log("El perímetro del Triángulo es: " + perimetroTriangulo);
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

//CÓDIGO DE LA CIRCUNFERENCIA
console.group("Círculo");
    const radioCirculo = 4;
    const diametro = radioCirculo*2;
    const PI = Math.PI;
    console.log("El radio del círculo es:" + radioCirculo + "cm");
    const perimetroCirculo = 2*PI*radioCirculo;
    console.log("El perímetro del Círculo es : " + perimetroCirculo.toFixed(3) + "cm");
    const areaCirculo = PI*Math.pow(radioCirculo,2);
    console.log("El área del Círculo es : " + areaCirculo.toFixed(3) + "cm2");

console.groupEnd();