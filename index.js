const express = require("express");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/database");
const routes = require("./routes");

const app = express();
const port = 3000;

// Conecta a la base de datos MongoDB
connectDatabase();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// Configura las rutas
app.use("/", routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
