
function calcularPrecioConDescuento(precioOriginal,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function button_calcular(){
    const inputPrice = document.getElementById("Inputprice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount);
    //alert(precioConDescuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;

}

