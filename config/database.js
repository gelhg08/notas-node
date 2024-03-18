const mongoose = require("mongoose");
let Notas;

const connectDatabase = async () => {
  try {
    if (!Notas) {
      Notas = mongoose.model("Notas", require("../models/userModel").schema);
    }

    await mongoose
      .connect(
        "mongodb+srv://angelicamhg31:IevENUAk6CTWodsi@mongodb3.wvf0uet.mongodb.net/"
      )
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));

    await initializeData();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
 
const initializeData = async () => {
  try {
    const userNotas = [
      {
        nombre: "Juan",
        apellido: "Pérez",
        nota1: 70,
        nota2: 80,
      },
      {
        nombre: "Angelica",
        apellido: "Hernandez",
        nota1: 90,
        nota2: 80,
      },
    ];
    await Notas.insertMany(userNotas);
    console.log("Users inserted successfully");
  } catch (error) {
    console.error("Failed to create user:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;

