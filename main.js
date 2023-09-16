/* const x = prompt('Ingrese un número');

function factorialNumeral(number) {
    return number * 5 * 4 * 3 * 2 * 1;
}

console.log(factorialNumeral(x)); */

const notes = [80, 77, 88, 95, 68];

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

console.log(promdioFinal(notes[0]));