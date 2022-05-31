const { Router } = require('express') ;
const { hashPass, decryptUser } = require('../middleware');
const { addUser, listUsers, updateUser, deleteUser, login } = require('./userController')
const userRouter = Router();

userRouter.get('/login', decryptUser, login ); // moved from login routes
userRouter.post('/signup', hashPass, addUser)
userRouter.get('/user', hashPass, listUsers)
userRouter.patch('/resetpassword', hashPass, updateUser)
userRouter.delete('/delete', deleteUser)



module.exports = userRouter;


// changed patch endpoint.
