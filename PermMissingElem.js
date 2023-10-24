/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

A mathematical technique for determining the sum of a series of natural numbers could be employed.
*/
function isValidN(N) {

    //valido si esta en el rango
    return N >= 0 && N <= 100000;
}

function areElementsDistinct(A) {
    let uniqueElements = new Set(A);
    //valido si es unico
    return uniqueElements.size === A.length;
}

function areElementsInRange(A) {
    //obtengo el elemento maximo
    let maxElement = Math.max(...A);
    //valido que los elementos esten en el rango entre el elmento maxmo con el largo del arreglo 
    return maxElement <= A.length + 1;
}



function solution(A) {
    if (!isValidN(A.length) || !areElementsDistinct(A) || !areElementsInRange(A)) {
        return "Datos de entrada no válidos";
    }
    let N = A.length + 1;
    let totalSum = (N * (N + 1)) / 2;
    let actualSum = A.reduce((sum, num) => sum + num, 0);
    return totalSum - actualSum;
}
const A = [2, 3, 1, 4];
console.log(solution(A));