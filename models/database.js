const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose.connect(
    process.env.mongoDB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("mongo database successfully connected....");
        }
    }
);

module.exports = db;
