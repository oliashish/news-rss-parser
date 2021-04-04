const rssDetailsModel = require("../models/rssDetails");
const Parser = require("rss-parser");
let parser = new Parser();

// This function is to get Rss Feeds and parse(as rss feeds are by default xml) that to JSON.
function getRssFeeds(RssLink) {
    let RssFeeds = parser.parseURL(RssLink);
    return RssFeeds;
}

const CreateRssDetails = (data, img) => {
    const recieveddata = rssDetailsModel.Create(data, img);

    return recieveddata;
};
const GetByDetails = async (category, paperName) => {
    const data = await rssDetailsModel.GetByDetails(category, paperName);
    const RssLink = data[0].rssFeedLink;
    const RssFeeds = getRssFeeds(RssLink);
    return RssFeeds;
};
const GetByCategory = async (category) => {
    const data = await rssDetailsModel.GetByCategory(category);
    return data;
};
const GetAllCategories = async () => {
    const data = await rssDetailsModel.GetAllCategories();
    return data;
};

module.exports = {
    CreateRssDetails,
    GetByDetails,
    GetAllCategories,
    GetByCategory,
};
