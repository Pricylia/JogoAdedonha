export class jogador{
    nome: String;
    palavra?: Array<String>;

    constructor(nome: String, palavra?: Array<String>){
        this.nome = nome;
        this.palavra = palavra;
    }
}

