const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());

app.get("/names", (req, res) => {
  res.send(db);
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
