let nome = document.getElementById("nome")
let email = document.getElementById("email")
let mensagem = document.getElementById("mensagem")
let botaoenviar = document.getElementById("botaoenviar")
let textostatus = document.getElementById("status")

function validacao() {
    if (nome.value.length === 0 && email.value.length === 0 && mensagem.value.length === 0 ) {
        textostatus.innerHTML = "Status: Preencha todos os campos"
    } else if (email.value.length === 0){
        textostatus.innerHTML = "Status: Coloque seu email"
    } else {
        textostatus.innerHTML = "Status: Enviado com sucesso"
    }
}
