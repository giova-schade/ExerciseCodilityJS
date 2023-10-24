function solution(A) {
    let count = 0;
    let currentIndex = 0;
    //variable para crear posiciones visitadas
    const visited = new Array(A.length).fill(false);
    //para este ejercicio se utilizara la tecnica de seguimiento de enlace 
    while (currentIndex !== -1 && !visited[currentIndex]) {
        visited[currentIndex] = true;
        currentIndex = A[currentIndex];
        count++;
    }
    
    return count;
}

// Ejemplo de uso:
const arrayA = [1, 4, -1, 3, 2];
const lengthOfList = solution(arrayA);
console.log(lengthOfList); // Debería imprimir 4