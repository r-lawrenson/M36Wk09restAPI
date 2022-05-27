const { Router } = require('express') ;
const { login, tokenCheck } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/login', tokenCheck, login)

module.exports = loginRouter;