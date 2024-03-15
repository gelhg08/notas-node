const express = require('express');
const router = express.Router();
const notasController = require('../controllers/userController');

router.get("/api/v1/notas", notasController.getAllNotas);
router.get("/api/v1/nota/id/:id", notasController.getNotasById);
router.post("/api/v1/notas", notasController.createNotas);

module.exports = router;
