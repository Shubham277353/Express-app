const {Router} = require("express");

const indexRouter = Router();


// indexRouter.get("/", (req, res) => res.send("Welcome to library Manager"));

indexRouter.post("/:user", (req, res) => {
    res.send(req.query);
    
})

module.exports = indexRouter;