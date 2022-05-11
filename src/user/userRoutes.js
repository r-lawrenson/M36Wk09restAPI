const { Router } = require("express");
const { addUser, findUser, login } = require("./userController");
const { hashPass, decrypt } = require("../middleware");

const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user/login", decrypt, login);
userRouter.get("/user/find", findUser);
module.exports = userRouter;