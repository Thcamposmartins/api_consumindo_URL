const { Router } = require('express');

const routes = Router();

routes.get('/posts',Controller.listAll);
routes.post('/posts',Controller.create);
routes.get('/posts/:id',Controller.listById);
routes.update('/posts/:id',Controller.updateById);

module.exports =  routes;