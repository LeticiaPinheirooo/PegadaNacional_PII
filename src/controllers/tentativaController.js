var tentativaModel = require("../models/tentativaModel");

function salvarTentativa(req, res) {
    var idUsuario = req.body.idUsuario;
    var idMusica = req.body.idMusica;
    var acertos = req.body.acertos;
    var porcentagem = req.body.porcentagem;


    if (!idUsuario || !idMusica || acertos == null || porcentagem == null) {
        return res.status(400).json("ta faltando coisa ai");
    }

    tentativaModel.salvarTentativa(idUsuario, idMusica, acertos, porcentagem)
        .then(function () {
            res.json("FOIIIIII!");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json("erro interno ao salvar tentativa.");
        });
}

module.exports = {
    salvarTentativa
};
