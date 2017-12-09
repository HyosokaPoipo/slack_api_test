var  hisoka_env = require('node-env-file');
hisoka_env(__dirname+'/.env');


var poipo_express = require('./express_poipo');

//poipo_express.initialize_express_poipo();


var poipo_request = require('./poipo_request');
//poipo_request.poipo_request_slack_api_test();
//poipo_request.poipo_request_slack_users_list();
//poipo_request.poipo_request_slack_groups_list();
poipo_request.poipo_request_slack_channels_list();