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
    Id: req.body.Id
  };
  connection.query(`DELETE FROM words WHERE Id = ${response.Id}`, function(
    err,
    result,
    fields
  ) {
    if (err) throw err;
  });
  res.redirect(req.get("referer"));
});

module.exports = router;
