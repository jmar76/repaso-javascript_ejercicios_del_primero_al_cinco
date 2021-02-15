let nombres = ["jose", "maría", "irene"]
let nombres2 = ["andrés", "ana", "sara"]
let colores = ["verde", "amarillo", "rojo"]
let apellidos = ["fernadez", "lopez", "martin"]
let numbers = [15, 12, 56456]

function people(name, lastName) {
    let fullNames = [];


    for (let i = 0; i < lastName.length; i++) {

        fullNames.push({ name: name[i], lastName: lastName[i] });
    }
    //console.log(fullNames);
    return fullNames;
}
//people(nombres, apellidos)
console.log(people(colores, apellidos));
