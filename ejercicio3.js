/******************************************************************************************* */
// en esta agrupación de variables tenemos los arrays declarados con los strings en minúscula.
let nombres = ["jose", "maría", "irene"];
let apellidos = ["fernadez", "lopez", "martin"];
let coloresFavoritos = ["verde", "rojo", "azul edgr"];
/******************************************************************************************* */

/*************************************************************************************************************************** */
// en esta agrupación de variables tenemos los arrays declarados: nombres, apellidos y colores favoritos con la letra capital.
let nombresM = [];
let apellidosM = [];
let coloresFavoritosM = [];
/*************************************************************************************************************************** */

/*************************************************************************************************************************** */
/* en este bloque estamos transformando en letra capital todos los strings de: nombres, apellidos y colores.
pusheandolo a la segunda agrupación de arrays.*/
const primeraLetraMayuscula = (cadena) => cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));
nombres.forEach(cadena => {
    nombresM.push(primeraLetraMayuscula(cadena));
});

const primeraLetraMayuscula2 = (cadena) => cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));
apellidos.forEach(cadena => {
    apellidosM.push(primeraLetraMayuscula2(cadena));
});

const primeraLetraMayuscula3 = (cadena) => cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));
coloresFavoritos.forEach(cadena => {
    coloresFavoritosM.push(primeraLetraMayuscula2(cadena));
});
/********************************************************************************************************************** */

/************************************************************************************************ */
//en este bloque tenemos declarados tres arrays que van a contener todos los string en MAYÚSCULAS.
let nombresMayusculas = [];
let apellidosMayusculas = [];
let coloresFavoritosMayusculas = [];
/************************************************************************************************ */

/************************************************************************************************ */
/*en este bloque declaramos las funciones que van a transformar las Arrayscons strings en minúsculas a MAYUSCULAS.
empezamos por la function que va a transformar en MAYUCULAS el Array nombres.*/
var cambiarNombresAMayusculas = () => nombresMayusculas;
for (let i = 0; i < nombres.length; i++) {
    let element = nombres[i];
    if (element = "string") {
        nombresMayusculas.push(nombres[i].toUpperCase());
    }
}
//cambiarNombresAMayusculas()
//console.log(nombresMayusculas);

//continuamos por la function que va a transformar en MAYUCULAS el Array apellidos.
var cambiarApellidosMayusculas = () => apellidosMayusculas;

for (let i = 0; i < apellidos.length; i++) {
    let element = apellidos[i];
    if (element = "string") {
        apellidosMayusculas.push(apellidos[i].toUpperCase());
    }
}
cambiarApellidosMayusculas()
//console.log(apellidosMayusculas);

//Y por último la function que va a transformar en MAYUCULAS el Array colores favoritos.
var cambiarColoresFavoritosMayusculas = () => coloresFavoritosMayusculas;

for (let i = 0; i < coloresFavoritos.length; i++) {
    let element = coloresFavoritos[i];
    if (element = "string") {
        coloresFavoritosMayusculas.push(coloresFavoritos[i].toUpperCase());
    }
}
cambiarColoresFavoritosMayusculas()
//console.log(coloresFavoritosMayusculas);

/****************************************************************************************************************** */
/* En este bloque construimos la function people para invocar las diferentes variables externas, con sus atributos,
 transformando el array fullNAmes en un Array Objeto. */
var people = (name, lastName, colors) => {
    let fullNames = [];
    for (let i = 0; i < name.length; i++) {
        fullNames.push({ name: name[i], lastName: lastName[i], colors: colors[i]});
    }
    return fullNames;
}
console.log(fullNames);
people()

/*EJECUCIÓN DEL PROGRAMA, inserta los parámetros que necesites, 
recuerda que están declarados con la variable LET*/
/********************************************************************************************/
console.log(people(nombresMayusculas, apellidos, coloresFavoritosM));

/********************************************************************************************/


