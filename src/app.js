const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { swaggerUi, swaggerDocs } = require("./docs/swaggerConfig");

const linkRoutes = require("./routes/linkRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.error("Erro ao conectar:", err));

app.use("/api/links", linkRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
