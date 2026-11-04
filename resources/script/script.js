let formulario = document.querySelector("#formulario");
let sucesso = document.querySelector("#sucesso");

function mostrarErro(campo, mensagem) {
    let erro = campo.parentElement.querySelector(".erro");

    erro.textContent = mensagem;
    campo.classList.add("invalido");
}
function removerErro(campo) {
    let erro = campo.parentElement.querySelector(".erro");

    erro.textContent = "";
    campo.classList.remove("invalido");
}
function validarCampo(id) {
    let campo = document.querySelector("#" + id);

    removerErro(campo);

    if (campo.value.trim() === "") {
        mostrarErro(campo, "Este campo é obrigatório");
        return false;
    }
    return true;
}
function validarEmail() {
    let email = document.querySelector("#email");

    if (!validarCampo("email")) {
        return false;
    }

    if (!email.validity.valid) {
        mostrarErro(email, "Insira um e-mail válido, exemplo: emailvalido@gmail.com");
        return false;
    }

    return true;
}
function validarTipo() {
    let tipo = document.querySelector('input[name="tipo"]:checked');
    let erro = document.querySelector("#erro-tipo");

    erro.textContent = "";

    if (tipo === null) {
        erro.textContent = "Selecione um tipo de solicitação";
        return false;
    }

    return true;
}
function validarConsentimento() {
    let consentimento = document.querySelector("#consentimento");
    let erro = document.querySelector("#erro-consentimento");

    erro.textContent = "";

    if (consentimento.checked === false) {
        erro.textContent = "Você precisa autorizar o contato";
        return false;
    }

    return true;
}
function validarFormulario() {
    let nomeValido = validarCampo("nome");
    let sobrenomeValido = validarCampo("sobrenome");
    let emailValido = validarEmail();
    let mensagemValida = validarCampo("mensagem");
    let tipoValido = validarTipo();
    let consentimentoValido = validarConsentimento();

    if (
        nomeValido &&
        sobrenomeValido &&
        emailValido &&
        mensagemValida &&
        tipoValido &&
        consentimentoValido
    ) {
        return true;
    }

    return false;
}
let mensagem = document.querySelector("#mensagem");
let contador = document.querySelector("#contador");

function contarCaracteres() {
    let quantidade = mensagem.value.length;

    contador.textContent = quantidade + " / 500 caracteres";
}

mensagem.addEventListener("input", contarCaracteres);



formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    sucesso.textContent = "";

    if (validarFormulario()) {
        sucesso.textContent = "Mensagem enviada com sucesso!";
        formulario.reset();
    }
});

