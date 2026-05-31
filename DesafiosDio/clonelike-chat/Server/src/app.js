const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") }); // ← removeu "server" do caminho

const routes = require("./routes/routes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // ← origin especificada
app.use(routes);

module.exports = app;