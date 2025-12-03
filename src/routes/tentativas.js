var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/salvar-tentativa", function (req, res) {
    tentativaController.salvarTentativa(req, res);
});

module.exports = router;
