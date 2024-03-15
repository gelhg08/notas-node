const { Int32 } = require('bson');
const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  nota1: String,
  nota2: String
});

const Notas = mongoose.model('Notas', notasSchema);

module.exports = Notas;