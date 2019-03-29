const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dictionary"
});

const app = express();

router.post("/", function(req, res) {
  const table = req.body.table;
  console.log(table);
  connection.query(`SELECT * FROM ${table}`, function(err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});
module.exports = router;
