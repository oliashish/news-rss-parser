const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = new express();

const routes = require("./routes/routes");
const db = require("./models/database");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`app listening to port : ${PORT}`);
});
