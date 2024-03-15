const mongoose = require('mongoose')


const connectDatabase = async () => {
    try {
       
        await mongoose
        .connect("mongodb+srv://angelicamhg31:QTzqrcasl9rZBTql@cluster0.swtsmnl.mongodb.net/")
        .then(() => console.log('connect database'))
        .catch(err => console.log(err))

        await inicializeData()

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

const inicializeData = async () => { 
    try {
        const userNotas = [
            {
                nombre: "Juan",
                apellido: "Pérez",
                nota1: 70,
                nota2: 80
            }, 
            {
                nombre: "Angelica",
                apellido: "Hernandez",
                nota1: 90,
                nota2: 80
            }
        ]
        await Notas.insertMany(userNotas);
        console.log("Users inserted successfully");

    } catch (error) {
        console.error("Failed to create user:", error);
        process.exit(1);
    }
}

module.exports = connectDatabase();