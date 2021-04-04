const rssDetailsModel = require("../models/rssDetails");
const xmlParser = require("fast-xml-parser");
const fetch = require("node-fetch");

function getRssFeeds(RssLink) {
    return fetch(RssLink)
        .then((res) => res.text())
        .then((xmlString) => {
            let xmlObj = xmlParser.getTraversalObj(xmlString, {});
            let jsonObj = xmlParser.convertToJson(xmlObj, {});
            return jsonObj;
        })
        .catch((error) => {
            return error;
        });
}

const CreateRssDetails = (data, img) => {
    const recieveddata = rssDetailsModel.Create(data, img);

    return recieveddata;
};
const GetRssDetails = async (category, paperName) => {
    const data = await rssDetailsModel.GetByDetails(category, paperName);
    const RssLink = data[0].rssFeedLink;
    const RssFeeds = getRssFeeds(RssLink);
    return RssFeeds;
};
const GetByCategory = async (category) => {
    const data = await rssDetailsModel.GetDetailsByCategory(category);
    return data;
};
const GetAllCategories = async () => {
    const data = await rssDetailsModel.GetAllCategories();
    return data;
};

module.exports = {
    CreateRssDetails,
    GetRssDetails,
    GetAllCategories,
    GetByCategory,
};
