// Lista que armazena os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada do nome do amigo
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim(); // Remove espaços antes e depois do nome

    // Valida se o nome foi preenchido
    if (nome === "") {
        alert("O nome não pode ser vazio!"); // Alerta se o nome for vazio
        return;
    }

    // Verifica se o nome já foi adicionado à lista
    if (amigos.includes(nome)) {
        alert("Nome já foi adicionado!"); // Alerta se o nome já estiver na lista
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Limpa o campo de entrada após adicionar
    nomeDoAmigo.value = "";
    
    // Atualiza a lista de amigos exibida
    exibirAmigos();
}

// Função para exibir a lista de amigos na interface
function exibirAmigos() {
    // Seleciona o elemento HTML que exibirá a lista de amigos
    const lista = document.querySelector("#listaAmigos");
    
    // Limpa a lista exibida antes de atualizar
    lista.innerHTML = "";
    
    // Exibe cada amigo na lista HTML
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo; // Atribui o nome do amigo ao item da lista
        lista.appendChild(li);  // Adiciona o item à lista
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para realizar o sorteio
    if (amigos.length < 2) { 
        alert("Não há amigos suficientes para sortear. Adicione mais nomes."); // Alerta se não houver amigos suficientes
        return;
    } 
    
    // Gera um índice aleatório baseado no tamanho da lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio]; // Seleciona o amigo sorteado
    
    // Seleciona o elemento onde o resultado do sorteio será exibido
    const resultado = document.querySelector("#resultado");

    // Limpa a lista de amigos e a variável de amigos após o sorteio
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Exibe o resultado do sorteio na interface
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
