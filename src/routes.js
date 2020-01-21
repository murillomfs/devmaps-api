const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Resultados que passamos na url user/id/ )
// Body: req.body (Enviar informações)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;