const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello world"));

app.get("/:username/message{s}/:messageId", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.username}, your messageID is ${req.params.messageId}.`);
});

app.get("/{*splat}", (req, res) => {
  res.status(400).send("Not found");
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log("listening on port 3000");
});
