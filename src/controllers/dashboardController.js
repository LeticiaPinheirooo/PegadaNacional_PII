var dashboard_PNModel = require("../models/dashboard_PNModel");

function acertosPorArtista(req, res) {
    var id = req.params.idUsuario;

    dashboard_PNModel.acertosPorArtista(id)
    .then(resultado => {
        res.status(200).json(resultado);
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
        res.status(500).json(erro);
    });
}

function KPI_taxaAcertos(req, res) {
    var id = req.params.idUsuario;

    dashboard_PNModel.KPI_taxaAcertos(id)
    .then(resultado_kpiTaxa => {
        
        res.status(200).json(resultado_kpiTaxa);
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
        res.status(500).json(erro);
    });
}

function KPI_musicasJogadas(req, res) {
    var id = req.params.idUsuario;

    dashboard_PNModel.KPI_musicasJogadas(id)
    .then(resultado_kpimusicasJ => {
        
        res.status(200).json(resultado_kpimusicasJ);
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
        res.status(500).json(erro);
    });
}

function KPI_artistaFav(req, res) {
    var id = req.params.idUsuario;

    dashboard_PNModel.KPI_artistaFav(id)
    .then(resultado_kpiArtista => {
        
        res.status(200).json(resultado_kpiArtista);
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
        res.status(500).json(erro);
    });
}

function KPI_musicaFav(req, res) {
    var id = req.params.idUsuario;

    dashboard_PNModel.KPI_musicaFav(id)
    .then(resultado_kpiMusica => {
        
        res.status(200).json(resultado_kpiMusica);
    })
    .catch(function (erro) {
        console.log("Erro:", erro);
        res.status(500).json(erro);
    });
}

module.exports = {
    acertosPorArtista,
    KPI_taxaAcertos,
    KPI_musicasJogadas,
    KPI_artistaFav,
    KPI_musicaFav
};
