import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
<<<<<<< HEAD

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector("[data-formulario ]")
=======
const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]');
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
<<<<<<< HEAD
        "email": e.target.elements["email"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas))
=======
        "aniversario": e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64

    window.location.href = "./abrir-conta-form-2.html";
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
<<<<<<< HEAD
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tioposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];
=======
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
<<<<<<< HEAD
        tooShort: "Por favor, preencha um e-mail válido."
=======
        tooShort: "Por favor, preencha um email válido."
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
<<<<<<< HEAD
    campo.setCustomValidity("");

=======
    campo.setCustomValidity('');
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
<<<<<<< HEAD
    tioposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
=======
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
<<<<<<< HEAD

=======
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64
}