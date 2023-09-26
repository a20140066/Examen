alert("Bienvenido");
var nam = prompt("Ingrese su Nombre y Apellido");
    var res1 = prompt("¿Cuánta agua hay en la Tierra?\nA: Alrededor de un 41% de la superficie terrestre es agua\nB: Alrededor de un 51% de la superficie terrestre es agua\nC: Alrededor de un 71% de la superficie terrestre es agua");
    if(res1=="C"){
        res1 = 1;
    }else{
        res1=0;
    }
    var res2 = prompt("¿Qué océano es el más grande?\nA: El Pacífico\nB: El Atlántico\nC: El Índico");
    if(res2=="A"){
        res2 = 1;
    }else{
        res2=0;
    }
    var res3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA: 11 km \nB: 23 km \nC: 31 km");
    if(res3=="A"){
        res3 = 1;
    }else{
        res3=0;
    }
    var total = res1 + res2 + res3 +res4

document.write("<h1>Examen</h1>");
document.write("<h2>Resultado</h2>");
document.write("Hola " + nam + " tus resultados son: <br>");
document.write("Porcentaje de acierto es: " + total + "% <br>");
if(total<=0){
    document.write("Vuelve a intentarlo");
}
    document.write("Vuelve a intentarlo");
    if(total<=2){
        document.write("Puedes hacerlo mejor");
}else{
    document.write("Lo has hecho bien")
}