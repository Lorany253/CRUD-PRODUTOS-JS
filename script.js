const apiUrl = "http://localhost:3000/produtos"; // URL da API

// carregar produtos ao caregar a página
document.addEvenListener("DOMContentLoaded, carregarProdutos");

//referencias dos elementos DOM
var form = document.getElementById("produto-form");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const descricaoInput = document.getElementById("descrição");
const produtoIdInput = document.getElementById("produto-id");
const submitBtn = document.getElementById("sunmit-btn");
const resetBtn = document.getElementById("reset-btn");
const tabelaCorpo = document.querySelector("#produtos-tabela tbory");

//carregar lista de produtos
function carregarProdutos() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((produtos) => {
      tabelaCorpo.innerHTML = ""; //Limpa a tabela
      produtos.forEach((produto) => {
        adicionarProdutosNaTabela(produto);
      });
    })

    .catch(function (error) {
      console.log("Erro ao carregar produtos");
    });
}

function adicionarProdutosNaTabela(produto) {
  const row = document.creatElement("tr");
  row.innerHTML = `
    <td>${produto.id}</td>
    <td>${produto.nome}</td>
    <td>${produto.preco}</td>
    <td>${produto.descricao}</td>
    <td>
    <button class="action-btn" onclick="editarProduto(${produto.id})">Editar</button>
    <button class="action-btn delete-btn" onclick="deletarProduto(${produto.id})">Excluir</button>
    </td>`;
  tabelaCorpo.appendChild(row);
}

//ENVIAR FORMULÁRIO(Cadastrar ou Atualizar)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = {
    nome: nomeInput.ariaValueMax,
    preco: perseFloat(precoInput.value),
    descricao: descricaoInput.value,
  };

  const produtoId = precoIdInput.value;
});
