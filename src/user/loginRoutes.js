const { Router } = require('express') ;
const { login } = require('../middleware');

const loginRouter = Router();

loginRouter.post('/login', login)

module.exports = loginRouter;