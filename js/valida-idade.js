export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
<<<<<<< HEAD
        campo.setCustomValidity("O usuário não é maior de idade")
=======
        campo.setCustomValidity('O usuário não é maior de idade');
>>>>>>> f2d54c79b5775af36fe8d1416870b997a47c4f64
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}