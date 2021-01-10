// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const r = array[0];
  return r
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const a = array.length - 1;
  return array[a]
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
  for (let i = 0; i < array.length; i++) {
    var a = array[i];
    array[i] = a+1;
  }
return array
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var a = `${palabras[0]}`;
  for (let i = 1; i < palabras.length; i++) {
    a += ` ${palabras[i]}`;
  }
  return a
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for (let i = 0; i < array.length; i++) {
    if (elemento == array[i]){
      return true
    }    
  }
  return false
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var a = 0;
  for (let i = 0; i < numeros.length; i++) {
    a += numeros[i];
  }
  return a
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var a = 0, r = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    a += resultadosTest[i];
  }
  r = a/resultadosTest.length;
  return a
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a = Math.max(...numeros);
  return a
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  // var a = [];
  // Array.from(arguments);

  // var b = a[0];
  // for (let i = 1; i < c; i++) {
  //   b *= a[i];
  // }
  // return b
  
    var args = [], c = 0;
    args[0] = `${arguments[0]}`;
    c = args[0];
      for (var i = 1; i < arguments.length; i++){
          args[i] = `${arguments[i]}`;
          c *= args[i];
      }
      Number.parseInt(c);
      if(arguments == undefined){
        return 0
      }
      return 0
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
};
