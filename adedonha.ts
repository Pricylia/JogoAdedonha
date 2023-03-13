var readlineSync = require("readline-sync");

function adedonha() {
    console.log("\nAdedonha\n");
    let partidas: number;
    while (true) {
      partidas = readlineSync.questionInt(
        "Quantas partidas voces querem jogar? (2-6)\n> "
      );
      if (partidas <= 1 || partidas > 6)
      console.log("O numero de partidas deve estar entre 2 e 6\n");
    else break;
      }
}

function jogoInicia(){
    let numeroJogadores: number;
    while (true) {
        numeroJogadores = readlineSync.questionInt(
            "Quantas pessoas vao jogar?\n> "
            );
        if (!(0 < numeroJogadores && numeroJogadores <= 5))
          console.log("O numero de jogadores deve estar entre 1 e 5\n");
        else break;
      }
      for (let i = 1; i < numeroJogadores + 1; i++) {
        const name: string = readlineSync.question(
            `Jogador ${i} digite seu nome \n> `
          );
      }
      return numeroJogadores;
}



adedonha();
jogoInicia();
