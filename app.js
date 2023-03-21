const express = require("express");

const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dateAfter100Days = addDays(new Date(year, month, day), 100);

  const formattedDate = `${dateAfter100Days.getDate()}/${
    dateAfter100Days.getMonth() + 1
  }/${dateAfter100Days.getFullYear()}`;
  res.send(formattedDate);
});

app.listen(3002);

module.exports = app;
