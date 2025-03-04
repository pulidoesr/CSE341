const routes = require('express').Router();
const week01Controller = require('../controllers/week01');

routes.get('/', week01Controller.route01);
routes.get('/rocio', week01Controller.route02);

module.exports = routes;