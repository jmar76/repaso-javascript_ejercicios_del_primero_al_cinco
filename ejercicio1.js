
let myArray = [45, 67, 87, 23, 5, 32, 60];
let myNum = 600;

function numberInArray(myArray, myNum) {

    for (let i = 0; i <= myArray.length; i++) {
        let a = arbol[i];
        if (myNum == a) {
            return true;
        }
    }
    return false;

}
console.log(numberInArray(myArray, myNum));
