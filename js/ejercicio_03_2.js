/*
Ejercicio 3.2
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

// create your function here
const outputData = (item) => {
    const itemToString = item.toString();
    const result = [];
    
    for (let item of itemToString) {
        result.push(item);
    };
    
    console.log(result.join('-'));
    return result.join('-');
}

const input = 10;
outputData(input); //'1-0'

const secondInput = 1;
outputData(secondInput); //'1'

const thirdInput = 11234;
outputData(thirdInput); //'1-1-2-3-4'