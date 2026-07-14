const {Router} = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log("Welcome to the site");
    res.send("Hello world its your boi ksi");
})

module.exports = indexRouter;