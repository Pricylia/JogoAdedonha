"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var readlineSync = require("readline-sync");
var players = [];
var jogador1 = new player_1.jogador("Ana");
var jogador2 = new player_1.jogador("Clara");
function adedonha() {
    console.log("\nAdedonha\n");
    var partidas;
    while (true) {
        partidas = readlineSync.questionInt("Quantas partidas voces querem jogar? (2-6)\n> ");
        if (partidas <= 1 || partidas > 6)
            console.log("O numero de partidas deve estar entre 2 e 6\n");
        else
            break;
    }
    return partidas;
}
function alfabeto() {
    var alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letra = Math.floor(Math.random() * alf.length);
    console.log("Letra sorteada: ", alf[letra]);
}
function temas(qtdTema) {
    var tema = [];
    for (var i = 0; i < qtdTema; i++) {
        var palavra = readlineSync.question("Digite um tema: \n>");
        tema.push(palavra);
    }
    return tema;
}
function jogo() {
    var _a;
    var qtdTema;
    while (true) {
        qtdTema = readlineSync.questionInt("Com quantos temas voces querem jogar? (2-6)\n> ");
        if (qtdTema <= 1 || qtdTema > 6)
            console.log("O numero de temas deve estar entre 2 e 6\n");
        else
            break;
    }
    var temasRecebidos = temas(qtdTema);
    var rodadas = adedonha();
    for (var i = 0; i < rodadas; i++) {
        temaAleatorio(temasRecebidos);
        alfabeto();
        var palavraJogador1 = readlineSync.question("Digite a palavra de acordo com o tema e a letra\n>");
        (_a = jogador1.palavra) === null || _a === void 0 ? void 0 : _a.push(palavraJogador1);
    }
    console.log(jogador1.palavra);
}
function temaAleatorio(temas) {
    var posicao = Math.floor(Math.random() * temas.length);
    console.log("Tema sorteado: ", temas[posicao]);
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
