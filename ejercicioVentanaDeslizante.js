function solution(K, A) {
    const N = A.length;
    let count = 0;
    let minIdx = 0;
    let maxIdx = 0;

    A.forEach((val, right) => {
        const minVal = A[minIdx];
        const maxVal = A[maxIdx];

        if (maxVal - minVal <= K) {
            count += right - minIdx + 1;
        } else {
            // La ventana no cumple la condición, así que movemos minIdx hacia la derecha.
            minIdx++;
            if (minIdx > maxIdx) {
                // Si minIdx supera a maxIdx, actualizamos maxIdx.
                maxIdx = minIdx;
            }
        }

        if (count > 1000000000) {
            count = 1000000000; // Verificar el límite superior.
            return; // Salir del bucle forEach cuando se alcanza el límite superior.
        }
    });

    return count;
}


const arrayDatos=[1,2,3,4];
solution(arrayDatos);