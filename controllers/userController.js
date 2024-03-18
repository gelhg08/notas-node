const Notas = require('../models/userModel');

//Obtener todos los usuarios
const notasController = {
  getAllNotas: async (req, res) => {
    try {
      const notas = await Notas.find();
      res.json(notas);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Obtener notas por Id
  getNotasById: async (req, res) => {
    const id = req.params.id;
    try {
      const notasId = await Notas.findById(id);
      res.json(notasId);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  //Crear notas
  createNotas: async (req, res) => {
    const notaData = req.body;
    try {
      const newNotas = new Notas(notaData);
      const savedNotas = await newNotas.save();
      res.json(savedNotas);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
module.exports = notasController;
