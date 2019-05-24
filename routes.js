var Express         = require("express");
var Routes          = Express.Router();
var UserRoute       = require('./controller/userController');


Routes.use('/user/', UserRoute);


module.exports = Routes;

// const exp = require('express');
// const routes = exp.Router();

// const user = require('./controller/userController');

// routes.use('/user/', user);

// module.exports = routes;