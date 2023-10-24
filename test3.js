// Función para validar que N está en el rango [2, 100000]
function validarRangoN(N) {
    return N >= 2 && N <= 100000;
}

// Función para validar que N es par
function validarParidadN(N) {
    return N % 2 === 0;
}

// Función para validar cada elemento de la matriz A
function validarElementosA(A) {
    for (let num of A) {
        if (num < -1000000000 || num > 1000000000) {
            return false;
        }
    }
    return true;
}

function solution(A) {
    let cuentaPares = 0; // Contador para números pares
    let cuentaImpares = 0;  // Contador para números impares
    let largo = A.length;
    switch (true) {
        case !validarRangoN(largo):
            throw new Error('N está fuera del rango permitido.');
        case !validarParidadN(largo):
            throw new Error('N no es un número par.');
        case !validarElementosA(A):
            throw new Error('Uno o más elementos de A están fuera del rango permitido.');
    }
    // Contamos la cantidad de números pares e impares en la lista
    for (let num of A) {
        if (num % 2 === 0) {
            cuentaPares++;
        } else {
            cuentaImpares++;
        }
    }

    // Intentamos formar pares
    let pares = Math.min(cuentaPares, cuentaImpares);

    // Restamos los pares formados de los contadores
    cuentaPares -= pares;
    cuentaImpares -= pares;

    // agregamos números impares restantes
    pares += Math.floor(cuentaImpares / 2);

    // Si hemos formado N/2 pares, devolvemos true, de lo contrario, devolvemos false
    return pares === A.length / 2;

}

console.log(solution([-1,1]));
