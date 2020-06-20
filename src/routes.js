const { Router } = require('express');

const ProductController = require('./controllers/ProductController');
const ComplementoController = require('./Controllers/ComplementoController');

const routes = new Router();

routes.get('/produtos', ProductController.index);
routes.get('/produtos/:id', ProductController.show);
routes.post('/produtos', ProductController.store);
routes.put('/produtos/:id', ProductController.update);
routes.delete('/produtos/:id', ProductController.delete);

routes.post('/produtos/:id/:complemento', ComplementoController.store);

module.exports = routes;