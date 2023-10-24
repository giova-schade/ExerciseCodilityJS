/*
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/
function validRange(V) {
    const MIN = -1000;
    const MAX = 1000;

    if (typeof(V) == 'number') {
        return V >= MIN && V <= MAX;
    } else if (Array.isArray(V)) {
        for (let num of V) {
            if (num < MIN || num > MAX) {
                return false;
            }
        }
        return true;
    }
    return false;
}
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

function rotateArray(A,K){
    if(A.length ===0 ){return A};
    //rotamos
    K = K % A.length;  
    return A.slice(-K).concat(A.slice(0, -K));
}
function solution(A, K) {
    //Valido si el arreglo esta dentro del rango
    if (A === null || !validRange(A)) {
        console.error(`${A} Esta fuera de rango`);
        return;
    }
    // Valido si el numero esta en el rango
    if (K === null || !validRange(K)) {
        console.error(`${K} Esta fuera de rango`);
        return;
    }
    //realizo la rotaxion de A X K 
    return rotateArray(A, K);


}
const inputArray = parseArray(process.argv[2]);
const inputNumber = process.argv[3] ? parseInt(process.argv[3]) : null;

const result = solution(inputArray, inputNumber);
if (result) {
    console.log(result)
} else {
    console.log(result)
    console.error('Error al procesar el numero');
}
