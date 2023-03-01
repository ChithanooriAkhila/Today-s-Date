const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  //   res.send(formattedDate);
  //   console.log(formattedDate);
});

app.listen(3004);

module.exports = app;
