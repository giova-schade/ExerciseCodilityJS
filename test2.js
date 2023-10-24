

function validaLongitud(S) {
    return S.length >= 3 && S.length <= 499;
}

function validaContenido(S) {
    // valido que solo contenga palabras
    let regex = /^(one|two)([\+\-](one|two))*$/;
    return regex.test(S);
}


function validaInicioFinal(S) {
    // verifico que comience con uno o dos "
    return S.startsWith("one") || S.startsWith("two") && (S.endsWith("one") || S.endsWith("two"));
}


function solution(S) {

    //ejecuto validaciones
    switch (true) {
        case !validaLongitud(S):
            return "La longitud de la cadena es inválida.";
        case !validaContenido(S):
            return "El contenido de la cadena es inválido.";
        case !validaInicioFinal(S):
            return "La cadena no comienza o termina con una palabra válida.";
        default:
        let expression = S.replace(/one/g, '1').replace(/two/g, '2');

        //ejecuto la exprecion
        return eval(expression);
    }

}

// Probando con los ejemplos dados
console.log(solution("one+two-one-one+two+one")); // Debería imprimir 4
