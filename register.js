const apiUrl = 'http://localhost:3000'; // URL da API

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;
const mensagem = document.getElementById('mensagem');
const erro = document.getElementById('erro');

function registrar(){
    fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email, senha})
    })
    .then(Response => {
        if(!Response.ok){
            throw new Error('Erro ao cadastrar, verifique os dados.');
        }
        return response.json();
    })
    .then( data => {
        mensagem.textContent = 'Usuário cadastrado com sucesso!';
        erro.textContent = '';
    })
    .catch( err => {
        mensagem.textContent = '';
        erro.textContent = err.message;
    });
}