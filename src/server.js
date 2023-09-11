require("dotenv").config();
const express = require("express"); // khai bao express goi tu thu vien npm
const path = require("path");
const configViewEngine = require("./config/viewEngine"); //viewEngine.js
const webRouter = require("./route/web"); // web.js
const connection = require("./config/database"); //database.js

const app = express(); // app cua express
const port = process.env.PORT || 8080; // .env
const hostname = process.env.HOST_NAME; // .env

// config req.body
 
app.use(express.json());  // for json
app.use(express.urlencoded({ extended: true}));  // for form data

// config template engine
configViewEngine(app); //viewEngine.js

// khai bao routes
app.use("/", webRouter); // web.js

// simple query
// connection.query("select * from Users u;", function (err, results, fields) {
//   console.log(">>> results = ", results); // results contains rows returned by server
// });

// config static files: img/css/js

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
