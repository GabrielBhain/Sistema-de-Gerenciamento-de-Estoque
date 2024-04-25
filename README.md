# AvanadeMart - Sistema de Gerenciamento de Produtos

Este é um sistema de gerenciamento de produtos desenvolvido em [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) utilizando classes. O sistema é capaz de realizar operações como adicionar produtos, atualizar preços, adicionar/remover unidades do estoque e remover produtos por ID.

## Funcionalidades

- Adicionar produto simples
- Adicionar produto importado
- Atualizar preço do produto
- Adicionar unidades ao estoque do produto
- Remover unidades do estoque do produto
- Remover produto por ID

## Ferramentas Utilizadas

- JavaScript
- HTML

## Como Usar

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.
3. Utilize os formulários fornecidos na página para adicionar, atualizar ou remover produtos conforme necessário.
4. Acompanhe as atualizações na lista de produtos exibida abaixo dos formulários.

## Exemplo de Uso

javascript
// Criar uma instância de Produto
const produto1 = new Produto(1, "Camiseta", 29.99, 100);

// Atualizar o preço do produto
produto1.atualizarPreco(25.99);

// Adicionar unidades ao estoque
produto1.adicionarEstoque(50);

// Remover unidades do estoque
produto1.removerEstoque(20);


## Autor

Desenvolvido por [Gabriel Augusto Ferreira](https://github.com/GabrielBhain)

## Observações

Este projeto foi desenvolvido como parte de um desafio proposto, com o intuito de praticar conceitos de programação orientada a objetos em JavaScript.
```
