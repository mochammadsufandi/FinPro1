const express = require('express');
const masterProductRoutes = require('./masterProductRoutes');
const userRoutes = require('./userRoutes');

const routes = express.Router();

routes.use('/api',masterProductRoutes);
routes.use('/api',userRoutes);

module.exports = routes;


