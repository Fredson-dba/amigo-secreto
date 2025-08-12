//Criando um array (vetor) para armazenar os nomes
let amigos = [];

//Implementando função para adicionar os amigos à lista
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value; // capturar o valor no campo de entrada
    let espacoNome = nome.trim(); //remove os espaços em branco no início e no final do nome 

//Validar a entrada para que o campo não esteja vazio.
    if (nome == '') {
        alert ('Você esqueceu de informar o nome do amigo. Favor, digitar o nome do amigo'); // Se estiver vazio, retorna mensagem de erro
        return;
    }
 
//Verificar se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert('Este nome já consta na lista, Favor, adicione outro amigo');
        return;
    }

    amigos.push(nome); //adicionar nome do amigo;
    atualizarListaDeAmigos(); //Atualizar lista de amigos na tela
    document.getElementById('amigo').value = ''; //Limpar o campo de entrada após adicionar nome do amigo
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

//Implementando a função para sortear amigo secreto
function sortearAmigo() {

//Validando se algum amigo já foi adicionado para o sorteio
    if (amigos.length === 0) {
       alert ('você não adicionou nenhum amigo!!!'); 
       return;
    
 } else
        if (amigos.length < 3) {
            alert ('Favor, cadastrar 03 amigos para possibilitar o sorteio !!!'); //Verificando se existem no mínimo 03 amigos cadastrados
            return;
        } else {

//Selecionar um índice aleatóriamente do array (vetor) amigos
        let nomeSorteado = Math.floor(Math.random() * amigos.length);
//Obter o nome sorteado utilizando o índice aleatório
        let amigoSorteado = amigos[nomeSorteado];
//Exibir o resultado do sorteio
let resultadoSorteio = document.getElementById('resultadoSorteio');

resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

//Limpa lista de amigos cadastrados
document.getElementById('listaAmigos').innerHTML = '';

 
        }
}

