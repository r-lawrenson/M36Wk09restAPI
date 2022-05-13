const { Router } = require("express");
const { signup, login, listUsers, findOneUser, updateOneUser, deleteOneUser } = require("./userController");
const { hashPass, decrypt } = require("../middleware");

const userRouter = Router();

userRouter.post("/user/signup", hashPass, signup);
userRouter.get("/user/login", decrypt, login);
userRouter.get("/user/find", findOneUser);
userRouter.get("/user/list", listUsers);
userRouter.put("/user/update", updateOneUser);
userRouter.delete("/user/delete", deleteOneUser);

module.exports = userRouter;


// testing with insomnia //
// DONE // signup = {"email": "atlas01@mongodb.com", "username": "Atlas01", "password": "1234"}
// DONE // signup = {"email": "atlas02@mongodb.com", "username": "Atlas02", "password": "1234"}

// DONE // login = {"email": "atlas02@mongodb.com", "username": "Atlas02", "password": "1234"}
// correct password = PASS
// DONE // login = {"email": "atlas02@mongodb.com", "username": "Atlas02", "password": "123"}
// incorrect password = PASS - failed to login

// DONE // find one = {"email": "atlas02@mongodb.com"}
// correct email = PASS
// DONE // find one = {"username": "Atlas02"}
// correct username = PASS
// DONE // find one = {"email": "atlas0@mongodb.com"}
// incorrect email = PASS - user not found
// DONE // find one = {"username": "Atlas02"}
// correct username = PASS - user not found

// DONE // list = PASS - lists all users

// DONE // update = {"email": "atlas02@mongodb.com", "username": "Atlas03"}
// change username to Atlas03 = PASS

// DONE // delete = {"email": "atlas0@mongodb.com", "password": "1234"}
// incorrect email = PASS - user not found
// DONE // delete = {"email": "atlas02@mongodb.com", "password": "1234"}
// correct email = PASS - user deleted
