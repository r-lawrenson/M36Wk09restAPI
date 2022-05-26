const { Router } = require('express') ;
const { hashPass } = require('../middleware');

const { addUser, listUsers, updateUser, deleteUser } = require('./userController')

const userRouter = Router();


userRouter.post('/signup', hashPass, addUser)
userRouter.get('/user', hashPass, listUsers)
userRouter.patch('/resetpassword', hashPass, updateUser)
userRouter.delete('/user', hashPass, deleteUser)



module.exports = userRouter;


// changed patch endpoint.
