const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${day}-${month + 1}-${year}`;
  res.send(formattedDate);
  //   console.log(formattedDate);
});

app.listen(3000);

module.exports = app;
