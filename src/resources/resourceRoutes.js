const { Router } = require('express');

const { addResource, listResource } = require('./resourceController')

const resourceRouter = Router
();

resourceRouter.post('/resource', addResource)

resourceRouter.get('/resource', listResource)

module.exports = resourceRouter;