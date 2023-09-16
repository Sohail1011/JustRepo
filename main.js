/*--- Ejercicio 1 ---*/

/* const x = prompt('Ingrese un número');

function factorialNumeral(number) {
    return number * 5 * 4 * 3 * 2 * 1;
}

console.log(factorialNumeral(x)); */

/*--- Ejercicio 2 ---*/

/* const notes = [80, 77, 88, 95, 68];

function promdioFinal(nota) {
    if (nota < 60) {
        console.log('Su nota es una F.');
    } else if (nota < 70) {
        console.log('Su nota es una D.');
    } else if (nota < 80) {
        console.log('Su nota es una C.');
    } else if (nota < 90) {
        console.log('Su nota es una B.');
    } else {
        console.log('Su nota es una A');
    }
}

console.log(promdioFinal(notes[0])); */

/*--- Ejercicio 3 ---*/

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 !== 0) {
        console.log(`${element} Fizz`);
    } else {
        console.log(`${element}`)
    }
} */

/*--- Ejercicio 4 ---*/

/* const arreglo = [5, 1, 8, 6, 3];

for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i];
    console.log(element);
} */

/*--- Ejercicio 5 ---*/

/* const arreglo = [5, 1, 8, 6, 3];

const arregloNuevo = [];

let element;

for (let i = 0; i < arreglo.length / 2; i++) {
    let tem = arreglo[i];
    arregloNuevo[i] = arreglo[arreglo.length - 1 - i];
    arregloNuevo[arreglo.length - 1 - i] = tem;
}

console.log(arregloNuevo); */

/*--- Ejercicio 6 ---*/

/* const text = 'hola';

let reversed = ' ';

for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
}

console.log(reversed); */

/* --- Ejercicio 7 --- */

/* const base = prompt('Ingrese su base');

const exponente = prompt('Ingrese su exponente');

function exponenteBase(a, b) {
    return a ** b;
}

console.log(exponenteBase(base, exponente)); */

/* --- Ejercicio 8 --- */

const arreglo = [2, 8, 5, 3, 1];

console.log(arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4]);