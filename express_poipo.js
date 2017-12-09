/*** Using Express ***/
var express = require('express'),
    router  = require('routes'),
    bodyParser = require('body-parser')

;

var app = express();
var port = process.env.PORT || 3333;




module.exports= {
    initialize_express_poipo:function() {
        app.use(bodyParser.urlencoded({ extended: true }));

        app.listen(port, function () {
          console.log('Listening on port ' + port);
        });
    },

    express_poipo_slack_user_list: function() {

    }

}

//SALAH EEEH... AHAHAHA...