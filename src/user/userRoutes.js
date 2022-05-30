const { Router } = require('express') ;
const { hashPass, decryptUser } = require('../middleware');
const { addUser, listUsers, updateUser, deleteUser } = require('./userController')
const userRouter = Router();

userRouter.get('/login', decryptUser ); // moved from login routes
userRouter.post('/signup', hashPass, addUser)
userRouter.get('/user', hashPass, listUsers)
userRouter.patch('/resetpassword', hashPass, updateUser)
userRouter.delete('/user', hashPass, deleteUser)



module.exports = userRouter;


// changed patch endpoint.
