Sorteador amigo secreto

Este é um projeto simples em JavaScript que permite ao usuário inserir uma lista de nomes e, com um clique, sortear um nome aleatório. O resultado é exibido diretamente na tela.

Tecnologias Utilizadas

HTML

CSS

JavaScript

Funcionalidades

Entrada de nomes pelo usuário

Armazena os nomes em uma lista

Sorteio aleatório de um nome

Exibição do nome sorteado na tela

Como Usar

Clone este repositório:

git clonehttps://github.com/mateuscajun/Sorteador-amigo-secreto

Abra o arquivo index.html em um navegador.

Digite os nomes no campo de entrada.

Clique no botão "Sortear".

O nome sorteado será exibido na tela.

Exemplo de Código

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

Contribuição

Se desejar contribuir, sinta-se à vontade para abrir um pull request ou relatar problemas na aba de issues.

Licença

Este projeto está licenciado sob a MIT License.

