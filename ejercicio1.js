function isValidRange(N) {
    return N >= 1 && N <= 2147483647;
}

function isValidNumber(N) {
    return !isNaN(N);
}

function isString(value) {
    return typeof value === 'string';
}

function solution(N) {
    let currentGap =0;
    let insideGap=false;
    let maxGap=0;
    if (isString(N)) {
        console.error(`The value  ${N} is a string`);
        return; // Salir de la función
    }

    if (!isValidNumber(N)) {
        console.error(`The value  ${N} is not valid.`);
        return; // Salir de la función
    }

    if (!isValidRange(N)) {
        console.error('Out of range');
        return; // Salir de la función
    }

    const binary = N.toString(2);
    for (let i = 0; i < binary.length; i++){
        if(binary[i] === '1'){
            if (insideGap){
                //no estamos en un espacio binario
                maxGap = Math.max(maxGap,currentGap);
                currentGap = 0; 
            }else{
                // no estamos en un espacio binario
                insideGap = true;
            }
        }else {
            currentGap++;
        }
    }
    return maxGap;
}

const inputNumber = process.argv[2] ? parseInt(process.argv[2]) : null;

if (inputNumber !== null) {
    console.log(solution(inputNumber));
} else {
    console.error('Por favor, proporciona un número como argumento.');
}
