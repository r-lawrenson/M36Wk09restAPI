const { Router } = require('express') ;
const { hashPass } = require('../middleware');

const { addUser, listUsers, updateUser, deleteUser } = require('./userController')

const userRouter = Router();


userRouter.post('/user', hashPass, addUser)
userRouter.get('/user', hashPass, listUsers)
userRouter.patch('/user', hashPass, updateUser)
userRouter.delete('/user', hashPass, deleteUser)



module.exports = userRouter;
