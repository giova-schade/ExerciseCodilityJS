function isValidNode(node, count = { value: 0 }) {
    if (!node) return true;
    
    // Incrementar la cuenta de nodos.
    count.value++;

    if (count.value > 30000) {
        return false;
    }

    if (node.x < 1 || node.x > 9) {
        return false;
    }

    // Validar nodos hijos.
    return isValidNode(node.l, count) && isValidNode(node.r, count);
}

function solution(T) {
    
    if (!isValidNode(T)) {
        return 'Árbol inválido.';
    }

    const numbers = new Set();
    // creo funcion anidada para crear encapsulamiento 
    function dfs(node, path = []) {
        if (!node) return;

        // Añadir el valor actual del nodo al camino.
        path.push(node.x);

        // Si hemos recorrido exactamente 3 nodos.
        if (path.length === 3) {
            // Concatena los valores para formar el número y agrégalo al conjunto.
            numbers.add(path.join(''));
            return;
        }
        
        // Si no, continúa recorriendo.
        dfs(node.l, [...path]);
        dfs(node.r, [...path]);
    }

    function traverseTree(root) {
        if (!root) return;
        dfs(root);
        traverseTree(root.l);
        traverseTree(root.r);
    }

    traverseTree(T);

    return numbers.size;
}

// Definición del árbol para el ejemplo.
const T = {
    x: 1,
    l: {
        x: 2,
        l: {
            x: 5,
            l: { x: 3, l: null, r: null },
            r: null
        },
        r: {
            x: 9,
            l: null,
            r: null
        }
    },
    r: {
        x: 7,
        l: {
            x: 4,
            l: null,
            r: null
        },
        r: null
    }
};

console.log(solution(T));  // Debería imprimir 4
