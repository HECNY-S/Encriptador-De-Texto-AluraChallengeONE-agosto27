document.getElementById("btnEncriptar").addEventListener("click", encriptar);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
document.getElementById("btnCopiar").addEventListener("click", copiar);

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function encriptar() {
    const inputTexto = document.getElementById("inputTexto").value.trim();
    if (inputTexto) {
        document.getElementById("outputTexto").value = encriptarTexto(inputTexto);
    }
}

function desencriptar() {
    const inputTexto = document.getElementById("inputTexto").value.trim();
    if (inputTexto) {
        document.getElementById("outputTexto").value = desencriptarTexto(inputTexto);
    }
}

function copiar() {
    const outputTexto = document.getElementById("outputTexto").value;
    if (outputTexto) {
        navigator.clipboard.writeText(outputTexto)
            .then(() => alert("¡Texto Copiado!"))
            .catch(err => console.error("Error al copiar: ", err));
    }
}


