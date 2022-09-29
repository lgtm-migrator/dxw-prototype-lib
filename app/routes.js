const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Routes for specific projects
require('./routes/examples/routes.js')(router);
require('./routes/exercises/routes.js')(router);


module.exports = router