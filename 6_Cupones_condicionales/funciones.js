
coupons = [
    {name: "C6YU" , discount: 15},
    {name: "HYT7" , discount: 20},
    {name: "BNMI9", discount: 30}
];

function calcularPrecioConDescuento(precioOriginal,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function button_calcular(){
    const inputPrice = document.getElementById("Inputprice").value;
    const inputCoupon = document.getElementById("InputCoupon").value;



    //Ésta declaración Equivale a declararlo como funcion dentro del find
    const valido = function(coupons){
        return coupons.name === inputCoupon;
    }

    //find requiere una funcion adentro de ella que le exprese que desea buscar.
    const userCoupon = coupons.find(valido);

    if(!userCoupon){
        alert("EL Cupón " + inputCoupon + " No es válido");
    }
    else{
        const precioConDescuento = calcularPrecioConDescuento(inputPrice,userCoupon.discount);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento;
    }
}

