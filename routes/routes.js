const route = require("express").Router();
const rssDetailsController = require("../controllers/rssDetails");



route.post("/feeds", (req, res) => {
    const data = req.body;
    const recieveddata = rssDetailsController.CreateRssDetails(data);
    res.send(recieveddata);
});
route.get("/feeds/:category/:paperName", async (req, res) => {
    const paperName = req.params.paperName;
    const category = req.params.category;
    const data = await rssDetailsController.GetRssDetails(category, paperName);
    
    res.send(data);
});
route.get("/feeds", (req, res) => {
    res.send("in feeds route.");
});
module.exports = route;
