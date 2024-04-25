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
            console.log("Quantidade insuficiente em estoque.");
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
