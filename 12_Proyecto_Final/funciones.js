const personas = [
    {name:"Pedro" ,edad: 15},
    {name:"Juan"  ,edad: 17},
    {name:"Carlos" ,edad: 18},
    {name:"José" ,edad: 15},
    {name:"Honorio" ,edad: 14},
    {name:"Milton" ,edad: 13},
    {name:"Natalia"  ,edad: 14},
    {name:"Fernando" ,edad: 17},
    {name:"Cristina" ,edad: 16},
    {name:"Mary" ,edad: 16}
];

const edades = personas.map(
    function(persona){
       return persona.edad;
    }
);

const ordenadas = edades.sort(
        function(a,b){
            return a - b;
        }
    );

function promedio(edades){
    suma = 0;
    for(let edad of edades){
        suma = suma + edad;
    }
    return suma/10;
}

let lista_elementos = [];

ordenadas.map(
    function(elemento){

        if(!lista_elementos[elemento]){
            lista_elementos[elemento] = 1;
        }
        else{
            lista_elementos[elemento]+=1;
        }
    }
);



