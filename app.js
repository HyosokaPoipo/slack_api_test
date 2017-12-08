var  hisoka_env = require('node-env-file');
hisoka_env(__dirname+'/.env');


var poipo_express = require('./express_poipo');

poipo_express.initialize_express_poipo();
