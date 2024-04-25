// Array para armazenar os produtos
let produtos = [];

class Produto {
    #id;
    #nome;
    #preco;
    #estoque;

    constructor(id, nome, preco, estoque) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    getId() {
        return this.#id;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    getEstoque() {
        return this.#estoque;
    }

    atualizarPreco(novoPreco) {
        this.#preco = novoPreco;
    }

    adicionarEstoque(quantidade) {
        this.#estoque += quantidade;
    }

    removerEstoque(quantidade) {
        if (this.#estoque >= quantidade) {
            this.#estoque -= quantidade;
        } else {
            console.log("Quantidade a ser removida é maior que o estoque disponível.");
        }
    }
}

class ProdutoImportado extends Produto {
    #paisOrigem;
    #taxaImportacao;

    constructor(id, nome, preco, estoque, paisOrigem, taxaImportacao) {
        super(id, nome, preco, estoque);
        this.#paisOrigem = paisOrigem;
        this.#taxaImportacao = taxaImportacao;
    }

    getPaisOrigem() {
        return this.#paisOrigem;
    }

    getTaxaImportacao() {
        return this.#taxaImportacao;
    }
}

function criarProduto() {
    const id = document.getElementById("produtoId").value;
    const nome = document.getElementById("produtoNome").value;
    const preco = parseFloat(document.getElementById("produtoPreco").value);
    const estoque = parseInt(document.getElementById("produtoEstoque").value);

    // Verifica se o ID do produto já existe
    const produtoExistente = produtos.find(produto => produto.getId() === id);
    if (produtoExistente) {
        alert("Já existe um produto com este ID.");
        return;
    }

    const produto = new Produto(id, nome, preco, estoque);
    produtos.push(produto); // Adiciona o produto ao array de produtos
    atualizarListaProdutos(); // Atualiza a lista de produtos na tela
    limparInputs("produtoId", "produtoNome", "produtoPreco", "produtoEstoque");
    alert("Produto adicionado com sucesso!");
}

function criarProdutoImportado() {
    const id = document.getElementById("produtoImpId").value;
    const nome = document.getElementById("produtoImpNome").value;
    const preco = parseFloat(document.getElementById("produtoImpPreco").value);
    const estoque = parseInt(document.getElementById("produtoImpEstoque").value);
    const paisOrigem = document.getElementById("produtoImpPais").value;
    const taxaImportacao = parseFloat(document.getElementById("produtoImpTaxa").value);

    // Verifica se o ID do produto importado já existe
    const produtoExistente = produtos.find(produto => produto.getId() === id);
    if (produtoExistente) {
        alert("Já existe um produto com este ID.");
        return;
    }

    const produtoImportado = new ProdutoImportado(id, nome, preco, estoque, paisOrigem, taxaImportacao);
    produtos.push(produtoImportado); // Adiciona o produto importado ao array de produtos
    atualizarListaProdutos(); // Atualiza a lista de produtos na tela
    limparInputs("produtoImpId", "produtoImpNome", "produtoImpPreco", "produtoImpEstoque", "produtoImpPais", "produtoImpTaxa");
    alert("Produto importado adicionado com sucesso!");
}

function atualizarPreco() {
    const id = document.getElementById("produtoIdPreco").value;
    const novoPreco = parseFloat(document.getElementById("novoPreco").value);

    const produto = produtos.find(produto => produto.getId() === id);
    if (produto) {
        produto.atualizarPreco(novoPreco);
        atualizarListaProdutos(); // Atualiza a lista de produtos na tela
        limparInputs("produtoIdPreco", "novoPreco");
        alert("Preço do produto atualizado com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
}

function adicionarEstoque() {
    const id = document.getElementById("produtoIdEstoqueAdd").value;
    const quantidade = parseInt(document.getElementById("quantidadeAdd").value);

    const produto = produtos.find(produto => produto.getId() === id);
    if (produto) {
        produto.adicionarEstoque(quantidade);
        atualizarListaProdutos(); // Atualiza a lista de produtos na tela
        limparInputs("produtoIdEstoqueAdd", "quantidadeAdd");
        alert("Produto adicionado ao estoque com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
}

function removerEstoque() {
    const id = document.getElementById("produtoIdEstoqueRem").value;
    const quantidade = parseInt(document.getElementById("quantidadeRem").value);

    const produto = produtos.find(produto => produto.getId() === id);
    if (produto) {
        produto.removerEstoque(quantidade);
        atualizarListaProdutos(); // Atualiza a lista de produtos na tela
        limparInputs("produtoIdEstoqueRem", "quantidadeRem");
        alert("Produto removido do estoque com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
}

function removerProdutoPorId() {
    const id = document.getElementById("produtoIdRemover").value;

    const index = produtos.findIndex(produto => produto.getId() === id);
    if (index !== -1) {
        if (confirm("Tem certeza de que deseja remover este produto?")) {
            produtos.splice(index, 1);
            atualizarListaProdutos(); // Atualiza a lista de produtos na tela
            limparInputs("produtoIdRemover");
            alert("Produto removido com sucesso!");
        }
    } else {
        alert("Produto não encontrado.");
    }
}

function limparInputs(...ids) {
    ids.forEach(id => document.getElementById(id).value = "");
}

function atualizarListaProdutos() {
    const produtosDiv = document.getElementById("produtosInfo");
    produtosDiv.innerHTML = "<h2>Produtos:</h2>";
    produtos.forEach(produto => {
        if (produto instanceof ProdutoImportado) {
            const produtoInfo = document.createElement("div");
            produtoInfo.innerHTML = `
                <p><strong>ID:</strong> ${produto.getId()}</p>
                <p><strong>Nome:</strong> ${produto.getNome()}</p>
                <p><strong>Preço:</strong> ${produto.getPreco()}</p>
                <p><strong>Estoque:</strong> ${produto.getEstoque()}</p>
                <p><strong>País de Origem:</strong> ${produto.getPaisOrigem()}</p>
                <p><strong>Taxa de Importação:</strong> ${produto.getTaxaImportacao()}</p>
                <hr>
            `;
            produtosDiv.appendChild(produtoInfo);
        } else {
            const produtoInfo = document.createElement("div");
            produtoInfo.innerHTML = `
                <p><strong>ID:</strong> ${produto.getId()}</p>
                <p><strong>Nome:</strong> ${produto.getNome()}</p>
                <p><strong>Preço:</strong> ${produto.getPreco()}</p>
                <p><strong>Estoque:</strong> ${produto.getEstoque()}</p>
                <hr>
            `;
            produtosDiv.appendChild(produtoInfo);
        }

    });
}
