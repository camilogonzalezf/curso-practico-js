function calcular(){
    const lado = Number(document.getElementById("lado").value);
    const base = Number(document.getElementById("base").value);
    const altura = Math.sqrt(Math.pow(lado,2)-Math.pow((base/2),2)).toFixed(3)
    alert("la Altura es " + altura);
}