//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 800

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}


var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuántos hijos tiene?")
}

/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos = parseInt(cantidad_hijos)
//Aquí debe calcular el recargo total basado en las respuestas ingresadas
if(edad_numero >=18 && edad_numero < 25){
  recargo += precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50){
  recargo += precio_base * edad_25;
} else if (edad_numero >= 50){
  recargo += precio_base *edad_50
}

//  * 2. Recargo por la edad del conyuge
//  */
if (edad_conyuge_numero >=18 && edad_conyuge_numero < 25){
  recargo += precio_base * edad_18;
}else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50){
  recargo += precio_base * edad_25;
} else if (edad_conyuge_numero >= 50){
  recargo += precio_base *edad_50
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if (cantidad_hijos > 0) {
  recargo += precio_base * cantidad_hijos * hijos_recargo;
}


recargo_total = recargo;

precio_final = precio_base + recargo_total;
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)


