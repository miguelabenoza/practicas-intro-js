/*
Ejercicio 3.3
Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:
*/

// create your function here
const outputData = (value) => {
    let totalChararters = 0;
    const characters = [];

    for (let item = 0; item < value.length; item++) {
        characters.push(value[item]);
        totalChararters++;
    };
    
    const result = `${totalChararters.toString()} ${characters.reverse().join('')}`;
    console.log(result);
};

const input1 = 'string';
outputData(input1); // '6 gnirts'

const input2 = 'variable';
outputData(input2); // '8 elbairav'

const input3 = 'pointer';
outputData(input3); // '7 retniop'