const express = require('express');
const router = express.Router();

const { userSignupValidator } = require("../validators/index");
const { signUp, signin } = require("../controllers/user");

router.post("/user/signup", userSignupValidator, signUp);
router.post("/user/signin", signin);

module.exports = router;