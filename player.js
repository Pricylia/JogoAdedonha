"use strict";
exports.__esModule = true;
exports.Jogador = void 0;
var Jogador = /** @class */ (function () {
    function Jogador(nome, palavra) {
        if (palavra === void 0) { palavra = []; }
        this.pontuacao = 0;
        this.nome = nome;
        this.palavra = palavra;
    }
    Jogador.prototype.adicionarPalavra = function (novaPalavra) {
        var _a;
        (_a = this.palavra) === null || _a === void 0 ? void 0 : _a.push(novaPalavra);
    };
    return Jogador;
}());
exports.Jogador = Jogador;
