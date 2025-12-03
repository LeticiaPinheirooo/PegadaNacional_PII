var database = require("../database/config");

function salvarTentativa(idUsuario, idMusica, acertos, porcentagem) {
    var instrucao = `
        INSERT INTO respostas (
            id_usuario,
            id_musica,
            acertos,
            porcentagem
        ) VALUES (${idUsuario}, ${idMusica}, ${acertos}, ${porcentagem});
    `;

    return database.executar(instrucao);
}

module.exports = {
    salvarTentativa
};
