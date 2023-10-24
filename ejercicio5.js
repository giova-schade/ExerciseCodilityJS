/*
Se dan un número entero K y una matriz A no vacía que consta de N números enteros.

Un par de números enteros (P, Q), tales que 0 ≤ P ≤ Q < N, se denomina porción de la matriz A.

Un sector acotado es un sector en el que la diferencia entre los valores máximo y mínimo en el sector es menor o igual a K. Más precisamente, es un sector tal que max(A[P], A[P + 1], ..., A[Q]) − min(A[P], A[P + 1], ..., A[Q]) ≤ K.

El objetivo es calcular el número de sectores acotados.

Por ejemplo, considere K = 2 y una matriz A tal que:

    Un[0] = 3
    Un[1] = 5
    Un[2] = 7
    Un[3] = 6
    Un[4] = 3
Hay exactamente nueve sectores acotados: (0, 0), (0, 1), (1, 1), (1, 2), (1, 3), (2, 2), (2, 3), ( 3, 3), (4, 4).

Escribe una función:

solución de función (K, A);

que, dado un número entero K y una matriz A no vacía de N enteros, devuelve el número de porciones acotadas de la matriz A.

Si el número de sectores acotados es mayor que 1.000.000.000, la función debería devolver 1.000.000.000.

Por ejemplo, dado:

    Un[0] = 3
    Un[1] = 5
    Un[2] = 7
    Un[3] = 6
    Un[4] = 3
la función debería devolver 9, como se explicó anteriormente.

Escriba un algoritmo eficiente para los siguientes supuestos:

N es un número entero dentro del rango [ 1 .. 100.000 ];
K es un número entero dentro del rango [ 0 .. 1.000.000.000 ];
cada elemento de la matriz A es un número entero dentro del rango [ −1,000,000,000 .. 1,000,000,000 ].
*/
/* para este ejercicio lo realizaremos con la tecnica de ventana deslizante */
function solution(K, A) {
    const N = A.length;
    let result = 0;
    let left = 0;
    let right = 0;
    let maxInWindow = A[0];
    let minInWindow = A[0];
    console.log(`${maxInWindow} , ${minInWindow}`);
    while (right < N) {
        maxInWindow = Math.max(maxInWindow, A[right]);
        minInWindow = Math.min(minInWindow, A[right]);

        if (maxInWindow - minInWindow <= K) {
            result += right - left + 1;
            right++;
            console.log(`Ventana válida (${left}, ${right - 1}): [${A.slice(left, right)}]`);
        } else {
            left++;
            if (left > right) {
                right = left;
                maxInWindow = A[left];
                minInWindow = A[left];
            }
        }

        if (result > 1000000000) {
            return 1000000000; // Verificación de límite superior.
        }
    }

    return result;
}
const K = 2;
const A = [3, 5, 7, 6, 3];
const resultado = solution(K, A);
console.log(`Número de ventanas válidas: ${resultado}`);