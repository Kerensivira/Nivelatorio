// ------Nota para el tutor:
//  Utilizo la función "saludar" para poder entender un poco mejor el
// el concepto y uso de una función (conceptos y ejemplo obtenido del área de recursos del Git Kraken), 
//era un concepto que no me había quedado del todo claro. En cuestión de los eventos aún me siento un poco falla, 
//deseo trabajarlo un poco más.

// function saludar () {

//     console.log("Hola soy una funcion");
// }
// saludar ()

//------------------------------------------------------


function obtenerDatoYSumar() {

    var A = 10;
    var number = document.getElementById('Seleccione monto').value;
    var resultado = (A + number);

    resultado = parseInt(A) + parseInt(number);

    console.log(resultado);
}

obtenerDatoYSumar();

// Tuve un pequeño inconveniente con la suma, en la prueba que realicé
// noté que capturaba los datos exitosamente, pero a la hora de hacer la suma
// en vez de darme la décima de la unidad suministrada, tomaba el 10 como un
// string y no como una cifra, por lo tanto quedaba algo así:
// 4 + 10 = 104. Para resolver esto, investigué y me apareció el método ParseInt.

