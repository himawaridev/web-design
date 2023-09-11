const connection = require("../config/database");
const { getAllUsers } = require('../service/CRUDService');


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});
};

//
const getDev = (req, res) => {
  res.send("check dev");
};

const getHimawari = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
}

const postCreateUser = async (req, res) => {
  let {email, name, city} = req.body;
  console.log('>>> req.email = ', email, '>>> req.name = ', name, '>>> req.city = ', city);
  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ?);`,
  //   [email, name, city],
  //   function(err, results) {
  //     console.log(results);
  //     res.send('create users success');
  //   }
  // );
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?, ?, ?);`, [email, name, city]
    );
    console.log('>>> req.email = ', results);
    res.send('create users success');

  // connection.query("select * from Users u;", function (err, results, fields) {
  //   console.log(">>> results = ", results); // results contains rows returned by server
  // });
  // const [results, fields] = await connection.query("select * from Users u;");


}

module.exports = {
  getHomePage,
  getDev,
  getHimawari,
  getCreatePage,
  postCreateUser,
};
