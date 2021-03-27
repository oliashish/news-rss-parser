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

const CreateRssDetails = (data) => {
    const recieveddata = rssDetailsModel.Create(data);
    return recieveddata;
};
const GetRssDetails = async (category, paperName) => {
    const data = await rssDetailsModel.GetByName(category, paperName);
    const RssLink = data[0].rssFeedLink;
    const RssFeeds = getRssFeeds(RssLink);
    return RssFeeds;
};

module.exports = {
    CreateRssDetails,
    GetRssDetails,
};
