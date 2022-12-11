// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let largo = array.length;
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  if (array.length === 0){
    return array;
  }else{
    for(var i = 0; i < array.length; i++){
      nuevoArray.push(array[i]+1);
    }
    return nuevoArray;
  } 
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length-1; i++){
    if (array[i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for(var i = 0; i < numeros.length; i++){
    total += numeros[i];
  }
  return total;
}




function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var cont = 0;
  var suma = 0;
  var promedio = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    suma += resultadosTest[i];
    cont = cont + 1;
  }
  promedio = suma/cont;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for(let i = 0; i < numeros.length-1; i++){
    if (numeros[i] > mayor){
      mayor = numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumlador = 1;
  if (arguments.length === 0){
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    for(var i = 0; i < arguments.length; i++){
      acumlador = acumlador * arguments[i];
    }
  }
  return acumlador;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var acu = 0;
  for(var i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      acu += 1;
    }
  }
  return acu;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral';
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquíi
  var numeroString = n.toString();
  if (numeroString[0] === "9") {
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i = 0; i < arreglo.length-1; i++){
    if (arreglo[i] === arreglo[i+1]){
      continue;
    }else{
      return false;
    }
  }
  return true;  
}
 
  
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  nuevoArray = [];
  for(var i = 0; i < array.length-1; i++){
    if(array[i] === 'Enero'){
      nuevoArray.push(array[i]);
    }
    if(array[i] === 'Marzo'){
      nuevoArray.push(array[i]);
    }   
    if(array[i] === 'Noviembre'){
      nuevoArray.push(array[i]);
    }
  }
  var enero = " ";
  var marzo = " ";
  var noviembre = " ";
  for(var i = 0; i < nuevoArray.length-1; i++){
    if(nuevoArray[i] === 'Enero'){
      enero = 'ok';
    }
    if(nuevoArray[i] === 'Marzo'){
      marzo = 'ok';
    }   
    if(nuevoArray[i] === 'Noviembre'){
      noviembre = 'ok';
    }
  }
  if (enero !== 'ok' && marzo !== 'ok' && noviembre !== 'ok'){
    return 'No se encontraron los meses pedidos';
  }
  return nuevoArray;
 
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for(let i = 0; i < array.length-1; i++){
    if (array[i]>100){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let cont = 0;
  let array = [];
  do{
    numero = numero + 2;
    array.push(numero);  
    cont = cont + 1; 
    if (numero === cont){
      return 'Se interrumpi\u00F3 la ejecuci\u00F3n';
    }
  }while(cont < 10)
  
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let cont = 0;
  let array = [];
  do{
    cont = cont + 1;
    if (cont === 5){
      continue;
    }else{
      numero = numero + 2;
      array.push(numero); 
    } 
  }while(cont < 10)
  
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
