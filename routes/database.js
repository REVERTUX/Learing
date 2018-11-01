// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql");
// var router = express.Router();

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "sampleDB"
// });

// const app = express();

// router.get("/", function(req, res) {
//   connection.connect();

//   connection.query("SELECT * FROM mysampletable", function(
//     err,
//     result,
//     fields
//   ) {
//     if (err) throw err;
//     res.send(result);
//   });

//   connection.end();
// });

// // app.listen(3001, () => {
// //   console.log("Go to http://localhost:3001/posts to see posts");
// // });
// module.exports = router;
