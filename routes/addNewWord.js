const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "englishwords"
});

router.post("/", function(req, res) {
  response = {
    PolWord: req.body.pol,
    EngWord: req.body.eng
  };
  connection.query("INSERT INTO words SET ?", response, function(
    err,
    result,
    fields
  ) {
    if (err) throw err;
  });
  res.redirect(req.get("referer"));
});

module.exports = router;
