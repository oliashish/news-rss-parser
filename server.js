const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`app listening to port : ${PORT}`);
});
