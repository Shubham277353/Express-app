const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.get("/{*splat}", (req, res) => {
  res.status(400).send("Not found");
});


const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`listening on port ${port}`);
});
