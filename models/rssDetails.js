const rssDetailsSchema = require("./schema");

const Create = (data, img) => {
    const newsRssDetails = new rssDetailsSchema({
        newsPaperName: data.paperName,
        category: data.category,
        rssFeedLink: data.rssFeedLink,
        categoryImg: img.filename,
    });

    const result = new Promise((resolve, reject) => {
        newsRssDetails.save(function (err, result) {
            if (err) {
                reject(new Error(err.message));
            } else {
                console.log("success");
            }
            resolve(result);
        });
    });
    return result;
};
const GetByCategory = async (category) => {
    const result = await new Promise((resolve, reject) => {
        rssDetailsSchema.find(
            { category: category },
            { newsPaperName: true, categoryImg: true },
            { __v: 0 },
            (err, resp) => {
                if (err) {
                    reject(new Error(err.message));
                }
                resolve(resp);
            }
        );
    }).catch((error) => {
        return error;
    });
    return result;
};
const GetByDetails = async (category, paperName) => {
    const result = await new Promise((resolve, reject) => {
        rssDetailsSchema.find(
            { category: category, newsPaperName: paperName },
            { rssFeedLink: true },
            { __v: 0 },
            (err, resp) => {
                if (err) {
                    reject(new Error(err.message));
                }
                resolve(resp);
            }
        );
    }).catch((error) => {
        return error;
    });

    return result;
};
const GetAllCategories = async () => {
    const result = await new Promise((resolve, reject) => {
        rssDetailsSchema.find(
            {},
            { category: true },
            { __v: 0 },
            function (err, res) {
                if (err) {
                    reject(new Error(err.message));
                }
                resolve(res);
            }
        );
    }).catch((error) => {
        return error;
    });

    return result;
};

module.exports = {
    Create,
    GetByDetails,
    GetAllCategories,
    GetByCategory,
};
