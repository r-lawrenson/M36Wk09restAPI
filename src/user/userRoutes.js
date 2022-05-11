const { Router } = require("express");
const { signup, login, findOneUser, deleteOneUser } = require("./userController");
const { hashPass, decrypt } = require("../middleware");

const userRouter = Router();

userRouter.post("/user/signup", hashPass, signup);
userRouter.get("/user/login", decrypt, login);
userRouter.get("/user/find", findOneUser);
userRouter.delete("/user/delete", deleteOneUser);

module.exports = userRouter;