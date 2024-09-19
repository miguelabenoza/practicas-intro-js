/*  Ejercicio 3.1

Crea una función para que con estos datos de entrada se produzca los siguientes
resultados:

*/

// create your function here
const outputFileName = (list) => {
    const getExtensionPosition = list.length -1;
    const extensionName = list[getExtensionPosition];
    const copyList = [...list];
    copyList.pop();

    const result = `${copyList.join('/')}.${extensionName}`;
    console.log(result);

    return result;
};

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
outputFileName(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
];
outputFileName(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];
outputFileName(input3);
// 'programming/languages/easy/beginner/useful/pythonstuff.py'