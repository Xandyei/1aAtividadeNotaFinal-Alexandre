let peso = document.getElementById("peso")
let altura = document.getElementById("altura")
let calcular = document.getElementById("calcular")
let resultado = document.getElementById("resultado")

function calcularimc() {
    if (peso.value.length === 0 && altura.value.length === 0) {
        resultado.innerHTML = "Status: Preencha todos os campos"
    } else {
        
        let imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
        resultado.innerHTML = "Seu IMC é de: " + imc.toFixed(2);
    }
}