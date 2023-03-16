export class Jogador {
    nome: String;
    palavra: Array<String>;
    pontuacao: number = 0;

    constructor(nome: String, palavra: Array<String> = []) {
        this.nome = nome;
        this.palavra = palavra;

    }

    adicionarPalavra(novaPalavra): void {
        this.palavra?.push(novaPalavra);
    }
}

