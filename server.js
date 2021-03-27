const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/routes");
const db = require("./models/database");

const PORT = process.env.PORT || 8080;

const app = new express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`app listening to port : ${PORT}`);
});
