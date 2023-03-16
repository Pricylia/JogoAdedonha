import { Jogador } from "./player";

var readlineSync = require("readline-sync");

let jogador1 = new Jogador("Ana");
let jogador2 = new Jogador("Clara");

function rodadas() {
  console.log("\nAdedonha\n");
  let partidas: number;
  while (true) {
    partidas = readlineSync.questionInt(
      "Quantas rodadas voces querem jogar? (2-6)\n> "
    );
    if (partidas <= 1 || partidas > 6)
      console.log("O numero de rodadas deve estar entre 2 e 6\n");
    else break;
  }
  return partidas;
}

function alfabeto() {
  let alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let letra = Math.floor(Math.random() * alf.length);
  console.log("Letra sorteada: ", alf[letra]);
  return alf[letra];
}

function temas(qtdTema) {
  let tema: Array<String> = [];
  for (let i = 0; i < qtdTema; i++) {
    let palavra: String = readlineSync.question("Digite um tema: \n> ");
    tema.push(palavra);
  }
  return tema;
}

function temaAleatorio(temas) {
  let posicao = Math.floor(Math.random() * temas.length);
  console.log("Tema sorteado: ", temas[posicao]);
  return temas[posicao];
}

function jogo() {
  let temasSorteados: Array<String> = [];
  let letrasSorteadas: Array<String> = [];
  let qtdTema;
  while (true) {
    qtdTema = readlineSync.questionInt(
      "Com quantos temas voces querem jogar? (2-6)\n> ");
    if (qtdTema <= 1 || qtdTema > 6)
      console.log("O numero de temas deve estar entre 2 e 6\n");
    else break;
  }
  let temasRecebidos = temas(qtdTema);
  let numRodadas = rodadas();
  for (let i = 0; i < numRodadas; i++) {
    temasSorteados.push(temaAleatorio(temasRecebidos));
    letrasSorteadas.push(alfabeto());
    let palavraJogador1 = readlineSync.question("Jogador 1 digite a palavra de acordo com o tema e a letra\n> ");
    jogador1.adicionarPalavra(palavraJogador1);
    let palavraJogador2 = readlineSync.question("Jogador 2 digite a palavra de acordo com o tema e a letra\n> ");
    jogador2.adicionarPalavra(palavraJogador2);
  }
  validarResultados(temasSorteados, letrasSorteadas);
  exibirVencedor();

}

function validarResultados(temasSorteados, letrasSorteadas) {
  console.log("========VALIDAÇÃO DE RESULTADOS========");
  for (let i = 0; i < temasSorteados.length; i++) {
    console.log("\nO(a) jogador(a) " + jogador1.nome + " no tema " + temasSorteados[i] + ", com a letra sorteada sendo " + letrasSorteadas[i]
      + ", digitou " + jogador1.palavra[i]);
    let validacaoJ1 = readlineSync.question("A resposta esta valida? (S-sim / N-nao)> ");
    console.log("\nO(a) jogador(a) " + jogador2.nome + " no tema " + temasSorteados[i] + ", com a letra sorteada sendo " + letrasSorteadas[i]
      + ", digitou " + jogador2.palavra[i]);
    let validacaoJ2 = readlineSync.question("A resposta esta valida? (S-sim / N-nao)> ");

    if (validacaoJ1 === "S") {
      if (jogador1.palavra[i] === jogador2.palavra[i]) {
        jogador1.pontuacao += 5;
      } else {
        jogador1.pontuacao += 10;
      }
    }
    if (validacaoJ2 === "S") {
      if (jogador1.palavra[i] === jogador2.palavra[i]) {
        jogador2.pontuacao += 5;
      } else {
        jogador2.pontuacao += 10;
      }
    }
  }
}
function exibirVencedor() {
  if (jogador1.pontuacao > jogador2.pontuacao) {
    console.log("\nO(a) vencedor(a) foi o/a jogador(a): " + jogador1.nome + " com " + jogador1.pontuacao + " pontos");
  } else if (jogador1.pontuacao < jogador2.pontuacao) {
    console.log("\nO(a) vencedor(a) foi o/a jogador(a): " + jogador2.nome + " com " + jogador2.pontuacao + " pontos");
  } else {
    console.log("O jogo terminou empatado");
  }
}

/*
function jogoInicia(){
    let numeroJogadores: number;
    while (true) {
        numeroJogadores = readlineSync.questionInt(
            "Quantas pessoas vao jogar?\n> "
            );
        if (!(1 < numeroJogadores && numeroJogadores <= 6))
          console.log("O numero de jogadores deve estar entre 2 e 6\n");
        else break;
      }
      for (let i = 1; i < numeroJogadores + 1; i++) {
        const nome: string = readlineSync.question(
            "Jogador ${i} digite seu nome \n>"
          );
      }
      return numeroJogadores;
}
*/

jogo();