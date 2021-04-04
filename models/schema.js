const mongoose = require("mongoose");
const rssFeedSchema = new mongoose.Schema({
    newsPaperName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rssFeedLink: {
        type: String,
        required: true,
    },
    categoryImg: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("rssDetailsSchema", rssFeedSchema);
