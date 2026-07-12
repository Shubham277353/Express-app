const {Router} = require("express");

const indexRouter = Router();

const userName = "abc";
const userId = -1;

// indexRouter.get("/", (req, res) => res.send("Welcome to library Manager"));

indexRouter.post("/", (req, res) => {
    console.log(req.params);
    res.end();
})

module.exports = indexRouter;