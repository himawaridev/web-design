const connection = require("../config/database");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../service/CRUDService');


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

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", {userEdit : user});
}


//---------------------------------------------
const postCreateUser = async (req, res) => {
  let {email, name, city} = req.body;
  console.log('>>> req.email = ', email, '>>> req.name = ', name, '>>> req.city = ', city);
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES (?, ?, ?);`, [email, name, city]
    );
    console.log('>>> req.email = ', results);
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
  let {email, name, city, userId} = req.body;
  // console.log('>>> req.email = ', email, '>>> req.name = ', name, '>>> req.city = ', city, '>>> req.userId = ', userId);
  //   console.log('>>> req.email = ', results);
  await updateUserById(email, city, name, userId);
    // res.send('Updated users succeed');
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render('delete.ejs', {userEdit : user});
}

const postHandleRemoveUser = async(req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
    res.redirect('/');
}

module.exports = {
  getHomePage,
  getDev, 
  getHimawari,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser
};

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ?);`,
  //   [email, name, city],
  //   function(err, results) {
  //     console.log(results);
  //     res.send('create users success');
  //   }
  // );
  // connection.query("select * from Users u;", function (err, results, fields) {
  //   console.log(">>> results = ", results); // results contains rows returned by server
  // });
  // const [results, fields] = await connection.query("select * from Users u;");