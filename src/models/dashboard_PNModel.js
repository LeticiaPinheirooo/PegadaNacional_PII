var database = require("../database/config");

function acertosPorArtista(idUsuario) {
    var selecao = `
        SELECT a.nome AS artista, SUM(r.acertos) AS total_acertos
        FROM respostas r
        JOIN musicas m ON r.id_musica = m.id_musica
        JOIN artistas a ON m.id_artista = a.id_artista
        WHERE r.id_usuario = ${idUsuario}
        GROUP BY artista
        ORDER BY total_acertos DESC;
    `;
    return database.executar(selecao);
}

function KPI_taxaAcertos(idUsuario) {
    var selecao = `
       SELECT round(avg(porcentagem) , 2) AS taxa_acertos
        FROM respostas r
        JOIN musicas m ON r.id_musica = m.id_musica 
        JOIN usuarios u ON r.id_usuario = u.id_usuario
        where r.id_usuario = ${idUsuario};
    `;
    return database.executar(selecao);
}

function KPI_musicasJogadas(idUsuario) {
    var selecao = `
    SELECT 
    COUNT(DISTINCT id_musica) AS musicas_diferentes
    FROM respostas
    WHERE id_usuario = ${idUsuario}

    `;
    return database.executar(selecao);
}

function KPI_artistaFav(idUsuario) {
    var selecao = `
    select
    u.id_usuario,
    a.id_artista,
    a.nome AS artista,
    AVG(r.acertos) AS media_acertos
    FROM respostas r
    JOIN musicas m ON r.id_musica = m.id_musica
    JOIN artistas a ON m.id_artista = a.id_artista
    JOIN usuarios u ON r.id_usuario = u.id_usuario
    WHERE u.id_usuario = ${idUsuario}
    GROUP BY a.id_artista, u.id_usuario
    ORDER BY media_acertos DESC
    LIMIT 1;
    `;
    return database.executar(selecao);
}

function KPI_musicaFav(idUsuario) {
    var selecao = `
        SELECT 
        m.titulo AS musica,
        u.id_usuario,
        AVG(r.acertos) AS media_acertos
        FROM respostas r
        JOIN musicas m 
        ON r.id_musica = m.id_musica
        JOIN usuarios u 
        ON r.id_usuario = u.id_usuario
        WHERE u.id_usuario = ${idUsuario}
        GROUP BY 
        m.id_musica, 
        m.titulo,
        u.id_usuario
        ORDER BY media_acertos DESC
        LIMIT 1;
    `;
    return database.executar(selecao);
}


module.exports = {
    acertosPorArtista,
    KPI_taxaAcertos,
    KPI_musicasJogadas,
    KPI_artistaFav,
    KPI_musicaFav
   
};
