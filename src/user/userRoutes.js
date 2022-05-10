const { Router } = require("express");
const { addUser, findUser } = require("./userController");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user/find", findUser);
module.exports = userRouter;