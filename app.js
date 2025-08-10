//Criando um array (vetor) para armazenar os nomes
let amigos = [];

//Implementando função para adicionar os amigos à lista
function adicionarAmigo() {
    let input = document.getElementById('amigo'); // capturar o valor no campo de entrada
    let nome = input.value.trim(); //remove os espaços em branco no início e no final de uma string

//Validar a entrada para que o campo não esteja vazio.
    if (nome == '') {
        alert ('Você esqueceu de informar o nome do amigo. Favor, digitar o nome do amigo'); // Se estiver vazio, retorna mensagem de erro
        return;
    } else {
      
    amigos.push(nome); //adicionar nome do amigo;
    atualizarListaDeAmigos(); //Atualizar lista de amigos na tela
    input.value = ''; //Limpar o campo de entrada após adicionar nome do amigo
    }
}

// Substituir o clique com o mouse no botão Adicionar por teclar "Enter"
   document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Encontre o botão pelo seu ID ou classe
    const button = document.getElementById('botaoAdicionar'); // Substitua 'meuBotao' pelo ID do seu botão
    
    // Verifique se o botão existe antes de tentar clicar
    if (button) {
      button.click();
    }
  }
});

//Implementando função para atualizar a lista de amigos na tela
function atualizarListaDeAmigos() {
    let listaDeamigos = document.getElementById('listaAmigos');
    listaDeamigos.innerHTML = ''; //Limpa lista de amigos na tela

//implementando loop para percorrer array amigos
    for (let cont= 0; cont < amigos.length; cont++) {
        let li = document.createElement ('li'); // criando elemento de lista <li> para cada nome.
        li.textContent = amigos[cont];
        listaDeamigos.appendChild(li); // adicionando um novo nome a lista
    }
}

