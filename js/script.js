document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("m").addEventListener("click",o3);
document.getElementById("d").addEventListener("click",o4);
document.getElementById("punto").addEventListener("click",punto);
document.getElementById("c").addEventListener("click",borrar);
document.getElementById("abrePar").addEventListener("click",abrePar);
document.getElementById("cierraPar").addEventListener("click",cierraPar);
document.getElementById("porcentaje").addEventListener("click",porcentaje);
document.getElementById("sr").addEventListener("click",showResult);
document.getElementById("historial").addEventListener("load",historial);

function n1(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n1').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n2(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n2').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n3(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n3').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n4(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n4').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n5(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n5').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n6(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n6').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n7(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n7').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n8(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n8').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n9(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n9').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function n0(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('n0').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function punto(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('punto').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function abrePar(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('abrePar').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function cierraPar(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('cierraPar').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function o1(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('s').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function o2(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('r').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function o3(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('m').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function o4(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let sumado = document.getElementById('d').innerHTML;
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

function borrar(){
  let resultPantalla = document.getElementById('resultado').innerHTML=num;
  
}

function getFormatedNumber(num){
  if(num=="-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function showResult(){
  let resultPantalla = document.getElementById('resultado').innerHTML;
  let suma = resultPantalla.indexOf("+");
  let resta = resultPantalla.indexOf("-");
  let mult = resultPantalla.indexOf("x");
  let div = resultPantalla.indexOf("÷");
  let apagar = resultPantalla.indexOf("c");

  if (suma !== -1) {
    arr = resultPantalla.split("+", 2);
    res = parseInt(arr[0]) + parseInt(arr[1]);
    document.getElementById("resultado").innerHTML = getFormatedNumber(res);
  } else if (resta !== -1) {
    arr = resultPantalla.split("-", 2);
    res = arr[0] - arr[1];
    document.getElementById("resultado").innerHTML = getFormatedNumber(res);
  } else if (mult !== -1) {
    arr = resultPantalla.split("x", 2);
    res = arr[0] * arr[1];
    document.getElementById("resultado").innerHTML = getFormatedNumber(res);
  } else if (div !== -1) {
    arr = resultPantalla.split("÷", 2);
    res = arr[0] / arr[1];
    document.getElementById("resultado").innerHTML = getFormatedNumber(res);
  } else if (num=="") {
    document.getElementById("resultado").innerHTML = num;
  } else if (apagar !== -1){
    printOutput("");
  }
  
  document.getElementById("resultado").innerHTML = getFormatedNumber(num);
  
  document.getElementById('resultado').innerHTML = resultPantalla + sumado
}

// function printOutput(num){
//   if(num==""){
//     document.getElementById('resultado').innerHTML=num;
//   }else{
//     document.getElementById('output-value').innerHTML=getFormatedNumber(num);
//   }
// }

function getHistory(){
  return document.getElementById('historial').innerText;
}

function printHistory(num) {
  document.getElementById('historial').innerText=num;
}
