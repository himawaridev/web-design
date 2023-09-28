const express = require("express");
const {
    getHomePage,
    getDev,
    getHimawari,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
} = require("../controller/homeController");
const router = express.Router();

// router methods
router.get("/", getHomePage);
router.get("/dev", getDev);
router.get("/himawari", getHimawari);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);


module.exports = router;
