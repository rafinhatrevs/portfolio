document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const botao = document.getElementById('form-botao');

    let formValido = true;
    let erros = [];

    if (nome === '') {
        formValido = false;
        erros.push('Preencha o campo nome.');

    } else if (nome.length > 50) {
        formValido = false;
        erros.push('O campo nome deve conter no máximo 50 caracteres.');
    }

    if (email === '') {
        formValido = false;
        erros.push('Preencha o campo email.');
    }

    if (assunto === '') {
        formValido = false;
        erros.push('Preencha o campo assunto.');

    } else if (assunto.length > 50) {
        formValido = false;
        erros.push('O campo assunto deve conter no máximo 50 caracteres.');
    }

    if (mensagem === '') {
        formValido = false;
        erros.push('Preencha o campo mensagem.');

    } else if (mensagem.length > 300) {
        formValido = false;
        erros.push('O campo mensagem deve conter no máximo 300 caracteres.');
    }

    if (formValido) {
        alert('Pronto! Sua mensagem foi enviada com sucesso. :)');

        document.getElementById('form').reset();

        botao.disabled = false;

    } else {
        alert(erros.join('\n'));

        botao.disabled = true;
    }
});