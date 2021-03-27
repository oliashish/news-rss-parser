const rssDetailsSchema = require("./schema");

const Create = (data) => {
    const newsRssDetails = new rssDetailsSchema({
        paperName: data.paperName,
        category: data.category,
        rssFeedLink: data.rssFeedLink,
    });

    const result = new Promise((resolve, reject) => {
        newsRssDetails.save(function (err, result) {
            if (err) {
                reject(new Error(err.message));
            }

            const data = resolve(result);
        });
    });
    return data;
};
const GetByName = async (category, paperName) => {
    let result = [];
    await rssDetailsSchema.find(
        { category: category, paperName: paperName },
        { __v: 0 },
        function (err, res) {
            if (err) {
                result = err;
            } else {
                result = res;
            }
        }
    );

    return result;
};
module.exports = { Create, GetByName };
