/* 
 A tener en cuenta:
       - No debes cambiar los nombres de las funciones.
       - No debes usar console.log().
       - DEBES usar return para que la funcion retorne lo pedido.
       - Tu código debe estar siempre encerrado entre las {} de cada función(ejercicio).

*/

/* 
------------------------------LEVEL 1----------------------------------
__________________|      |____________________________________________
     ,--.    ,--.          ,--.   ,--.
    |oo  | _  \  `.       | oo | |  oo|
o  o|~~  |(_) /   ;       | ~~ | |  ~~|o  o  o  o  o  o  o  o  o  o  o
    |/\/\|   '._,'        |/\/\| |/\/\|
__________________        ____________________________________________
                  |      |

------------------------------LEVEL 1----------------------------------
*/

function sonIguales(elemento1, elemento2) {
  // Devuelve "true" si "elemento1" y "elemento2" son estrictamente iguales
  // De lo contrario, devuelve "false"
  //↓↓↓ Tu código: ↓↓↓ */

  if(elemento1 === elemento2){
    return true
  }
  else return false
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length === str2.length){
    return true
  }
  else return false
}


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0){
    return true
  }
  else return false
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2!== 0){
    return true
  }
  else return false
}


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return (num*num)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return (num**3)
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return(num ** exponent)
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Este numero es positivo"
  //Si el número es negativo, devolver ---> "Este numero es negativo"
  //Si el número es 0, devuelve false
if(numero === 0){return false}
  else if(numero > 0){return "Este numero es positivo"}
  else if(numero < 0){return "Este numero es negativo"}
}

/* 
---------------------------LEVEL 2-------------------------------------
                                  .,
                        .      _,'f----.._
                        |\ ,-'"/  |     ,'
                        |,_  ,--.      /
                        /,-. ,'`.     (_
                        f  o|  o|__     "`-.
                        ,-._.,--'_ `.   _.,-`
                        `"' ___.,'` j,-'
                          `-.__.,--'
---------------------------LEVEL 2-------------------------------------
*/

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Lionel", "Messi" -> "Lionel Messi"
  // Tu código:
  return (nombre + " " + apellido)
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Exequiel" -> "Hola Exequiel!"
  //PISTA: debes concatenar palabras, espacios y el signo !
  // Tu código:
  return (`Hola ${nombre}!`)
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (`${str}!`)
}

function deEuroAdolar(euro) {
  /*  Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  como parámetro un número de euros y calcule el cambio en dólares. "suponiendo que vale 1.20"
  Escribe tu código aquí */
  return(euro*1.2)
}

function esVocal(letra) {
  /*   Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  Si no es vocal, tambien debe devolver "Dato incorrecto".
  Escribe tu código aquí */
  if(letra === 'a' || letra === 'e' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    return('Es vocal')
  }
  else if(letra.length > 1){
    return('Dato incorrecto')
  }
  else{
    return('Dato incorrecto')
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero === 10 || numero === 5){
    return true
  }
  else{
    return false
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return(numero > 20 && numero < 50 ? true : false)
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //resultado esperado: [0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
  //Escribe tu código aquí:
  var seis = 6;
  var tabla = []
  for(let i = 0; i < 11 ; i++){
    tabla[i] = seis*i
  }
  return tabla
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //PISTA: deberas usar un metodo para pasar el numero a string y asi poder leer su longitud con .length ;)
  //Escribe tu código aquí:
  if(numero.toString().length === 3){
    return true
  }
  else{
    return false
  }
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i < array.length; i++){
    array[i] = array[i] + 1
  }
  return array
}

/* 
------------------------LEVEL 3------------------------------

                    ░░░░░░░░░░░░░░░░░
                    ░░░░▄▄████▄▄░░░░░
                    ░░░██████████░░░░
                    ░░░██▄▄██▄▄██░░░░
                    ░░░░▄▀▄▀▀▄▀▄░░░░░
                    ░░░▀░░░░░░░░▀░░░░ 
                    ░░░░░░░░░░░░░░░░░
------------------------LEVEL 3------------------------------

*/
function devolverPrimerElemento(array) {
  /*   Devuelve el primer elemento de un  array (pasado por parametro)
   ↓↓↓ Tu código: ↓↓↓ */
   return(array[0])
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array[array.length-1]
  return ultimo
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello','world!'] -> 'Hello World!'
  // Tu código:
  return palabras.join(' ')
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length ; i++){
     if(array[i] === elemento){
      return true
     }
  }
  return false
}

function agregarNumeros(numeros) {
  // "numeros" es un array de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor(puedes usar .reduce() )
  // Tu código:
  const inicio = 0;
  const suma = numeros.reduce(
  (acumulador, actual) => acumulador + actual,
  inicio);
  return suma
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del array donde el valor es mayor a 18.
  //Escribe tu código aquí:
  var contador = 0
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i]>18){
      contador++
    }
  }
  return contador
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //PISTA: para saber si un numero comienza con 9 debes pasarlo a string y analizar la posicion [0] del numero convertido.
  //Escribe tu código aquí
  if(n.toString()[0] === '9'){
    return true
  }
  return false
}

function todosIguales(arreglo) {
  //indique si todos los elementos de un arreglo son iguales:
  //retornar true si son todos iguales, caso contrario retornar false.
  //Escribe tu código aquí
  for(let i = 0; i < arreglo.length - 1; i++){
    if(arreglo[i] != arreglo[i+1]){
      return false
    }
  }
  return true
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  //"Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const jan = 'Enero';
  const mar = 'Marzo';
  const nov = 'Noviembre';
  var arr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === nov || array[i] === mar || array[i] === jan) {
      arr.push(array[i]);
    }
  }

  if (arr.length < 3) {
    return 'No se encontraron los meses pedidos';
  } else {
    return arr;
  }
}

function elementosMayores(array) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo donde el valor sea mayor a 18
  //Escribe tu código aquí:
  var contador = 0
  for(let i = 0; i < array.length; i++){
    if(array[i]>18){
      contador++
    }
  }
  return contador
}

function mayorACien(array) {
  /*   La función recibe como argumento un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
 valores mayores a 100 (no incluye el 100).
La funcion debe devolver el nuevo array. */
  // Tu código:
  var arr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      arr.push(array[i]);
    }
  }
    return arr;
}

// // No modificar nada debajo de esta línea//
// // =======================================================================
module.exports = {
  sonIguales,
  tienenMismaLongitud,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  esPositivo,
  combinarNombres,
  obtenerSaludo,
  agregarSimboloExclamacion,
  deEuroAdolar,
  esVocal,
  esDiezOCinco,
  estaEnRango,
  operadoresLogicos,
  tablaDelSeis,
  tieneTresDigitos,
  obtenerLargoDelArray,
  incrementarPorUno,
  devolverPrimerElemento,
  devolverUltimoElemento,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  cuentoElementos,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  elementosMayores,
  mayorACien,
};
