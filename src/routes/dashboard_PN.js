var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/acertosPorArtista/:idUsuario", dashboardController.acertosPorArtista);
router.get("/KPI_taxaAcertos/:idUsuario", dashboardController.KPI_taxaAcertos);
router.get("/KPI_musicasJogadas/:idUsuario", dashboardController.KPI_musicasJogadas);
router.get("/KPI_artistaFav/:idUsuario", dashboardController.KPI_artistaFav);
router.get("/KPI_musicaFav/:idUsuario", dashboardController.KPI_musicaFav);


module.exports = router;
