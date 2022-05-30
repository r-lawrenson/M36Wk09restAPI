const { Router } = require('express');

const { addResource, listResource, updateResource, updateResourceWeb, updateResourceHelp, updateResourceKeywords, deleteResource } = require('./resourceController')

const resourceRouter = Router
();

resourceRouter.post('/addresource', addResource)

resourceRouter.post('/resource', listResource)

resourceRouter.patch('/resource', updateResource)

//resourceRouter.patch('/resource', updateResourceWeb) 

//resourceRouterHelp.patch('/resource', updateResourceHelp)

//resourceRouterKeywords.patch('/resource', updateResourceKeywords)

resourceRouter.delete('/resource', deleteResource)

module.exports = resourceRouter;