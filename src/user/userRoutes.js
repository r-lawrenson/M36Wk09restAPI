const { Router } = require('express') ;
const { hashPass, decryptUser } = require('../middleware');
const { addUser, listUser, updateUser, deleteUser, login } = require('./userController')
const userRouter = Router();

userRouter.get('/login', decryptUser, login ); // moved from login routes
userRouter.post('/signup', hashPass, addUser)
userRouter.get('/list', listUser); // renamed route to list
userRouter.patch('/resetpassword', hashPass, updateUser)
userRouter.delete('/delete', decryptUser, deleteUser);



module.exports = userRouter;


// changed patch endpoint.
