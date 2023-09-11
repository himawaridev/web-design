const express = require("express");
const {
    getHomePage,
    getDev,
    getHimawari,
    getCreatePage,
    postCreateUser,
} = require("../controller/homeController");
const router = express.Router();

// router methods
router.get("/", getHomePage);
router.get("/dev", getDev);
router.get("/himawari", getHimawari);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);


module.exports = router;
