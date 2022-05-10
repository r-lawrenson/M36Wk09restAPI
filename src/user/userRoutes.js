const { Router } = require("express");
const { addUser, findUser } = require("./userController");
const { hashPass } = require("../middleware");
// , decrypt, loginUser

const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user/find", findUser);
// userRouter.get("/user/login", decrypt, loginUser);
module.exports = userRouter;