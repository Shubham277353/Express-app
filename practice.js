const express = require("express");
const app = express();

app.get("/:username/message{s}/:messageId", (req,res) => {
    console.log(req.params);
    res.end();
})