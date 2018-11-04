// var express = require("express");
// var router = express.Router();

// /* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.json([
//     { id: 1, username: "somebody" },
//     { id: 2, username: "somebody_else" },
//     { id: 3, username: "Peter" }
//   ]);
// });

// module.exports = router;
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

router.get("/", function(req, res) {
  connection.query("SELECT * FROM words", function(err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

// app.listen(3001, () => {
//   console.log("Go to http://localhost:3001/posts to see posts");
// });
module.exports = router;
