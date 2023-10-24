/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function parseArray(input) {
    try {
        let array = JSON.parse(input);
        if (Array.isArray(array)) {
            return array;
        } else {
            console.error('El argumento proporcionado no es un arreglo.');
            return null;
        }
    } catch (error) {
        console.error('Error al parsear el arreglo:', error.message);
        return null;
    }
}
function validRange(A) {
    const MIN = -1000000;
    const MAX = 1000000;

    for (let num of A) {
        if (num < MIN || num > MAX) {
            return false;
        }
    }
    return true;
}


function solution(A) {
    //validamos que este en el rango
    if (A === null || !validRange(A)) {
        console.error('Esta fuera de rango');
        return;
    }
    //funcion princial del ejercicio
    const N = A.length;
    //creo nuevo arreglo para luego identificar 
    const marked = new Array(N + 1).fill(false);
    for (let i = 0; i < N; i++) {
        if (A[i] > 0 && A[i] <= N) {
            marked[A[i] - 1] = true;
        }
    }
   //busco el primer numero marcado
    for (let i = 0; i < N; i++) {
        if (!marked[i]) {
            return i + 1;
        }
    }
    return N + 1;
}

const inputArray = parseArray(process.argv[2]);
const result = solution(inputArray);
if (result) {
    console.log(result)
} else {
    console.log(result)
    console.error('Error al procesar el numero');
}
