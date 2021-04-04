const route = require("express").Router();
const path = require("path");
const multer = require("multer");

const rssDetailsController = require("../controllers/rssDetails");

const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../client/public/images"));
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: imageStorage });

route.post("/feeds", upload.single("image"), async (req, res) => {
    const data = req.body;
    const img = req.file;

    const recieveddata = await rssDetailsController.CreateRssDetails(data, img);
    res.send(recieveddata);
});
route.get("/feeds/categories", async (req, res) => {
    const data = await rssDetailsController.GetAllCategories();
    res.send(data);
});
route.get("/feeds/by/:category", async (req, res) => {
    const category = req.params.category;
    const data = await rssDetailsController.GetByCategory(category);
    res.send(data);
});

route.get("/feeds/:category/:paperName", async (req, res) => {
    const paperName = req.params.paperName;
    const category = req.params.category;
    const RssFeeds = await rssDetailsController.GetByDetails(
        category,
        paperName
    );
    const PureNews = RssFeeds.items;
    res.send(PureNews);
});
route.get("/feeds", (req, res) => {
    res.send("in feeds route.");
});
module.exports = route;
