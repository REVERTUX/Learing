const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dictionary"
});

router.post("/", function(req, res) {
  response = {
    EngWord: req.body.engWord,
    PolWord: req.body.polWord
    // Type: req.body.type
  };

  const table = req.body.table;
  const regex = /[a-zA-Z/()ęółśążźćń]{3,}/;

  if (regex.test(response.PolWord) && regex.test(response.EngWord)) {
    connection.query(`INSERT INTO ${table} SET ?`, response, function(
      err,
      result,
      fields
    ) {
      if (err) throw err;
    });
  }
  res.redirect(req.get("referer"));
});

module.exports = router;
