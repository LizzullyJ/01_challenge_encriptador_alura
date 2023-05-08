function encriptar() {
    let divResuelto = document.querySelector(".divResuelto");
    let divNoResuelto = document.querySelector(".divNoresuelto");
    let text = document.getElementById("input-text").value;

    let encriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto-desencriptado").value = encriptado;

    if (text != "") {
        divNoResuelto.setAttribute("hidden", true);
        divResuelto.removeAttribute("hidden");
    }
    text.value = "";
}

function desencriptar() {
    let divResuelto = document.querySelector(".divResuelto");
    let divNoResuelto = document.querySelector(".divNoresuelto");
    let text = document.getElementById("input-text").value;
    let desencriptado = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("texto-desencriptado").value = desencriptado;
    if (text != "") {
        divNoResuelto.setAttribute("hidden", true);
        divResuelto.removeAttribute("hidden");
    }

    text.value = "";

}

function copiar() {
    let divResuelto = document.querySelector(".divResuelto");
    let divNoResuelto = document.querySelector(".divNoresuelto");
    let output = document.getElementById("texto-desencriptado");
    let input = document.getElementById("input-text");
    output.select();
    document.execCommand("copy");
    input.value = "";
    output.value = "";
    divResuelto.setAttribute("hidden", true);
    divNoResuelto.removeAttribute("hidden")
}

const textarea = document.getElementById("input-text");

textarea.addEventListener("keypress", function (event) {
    const keyCode = event.keyCode || event.which;
    if ((keyCode < 97 || keyCode > 122) && keyCode !== 32) {
        event.preventDefault();
    }
});