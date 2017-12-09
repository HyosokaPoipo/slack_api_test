var poipo_request = require('request'),
querystring = require('querystring');

module.exports = {
    poipo_request_slack_api_test: function() {
        var m_body = {
            foo : "hisoka foo"
        };

        var m_body_form_data = querystring.stringify(m_body);

        poipo_request({
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Content-Length': m_body_form_data.length,
                'Authorization' : 'Bearer '+process.env.SLACK_LEGACY_TOKEN
            },
            body: m_body_form_data,
            uri: 'https://slack.com/api/api.test',
            method: 'POST'
        }, function(err, res, body) {
            console.log("body " +body);
            console.log("res "+res);
            console.log("err "+err);
        });
    },
    poipo_request_slack_users_list: function() {
        var m_body = {
            token : process.env.SLACK_LEGACY_TOKEN
        };
        var m_body_form_data = querystring.stringify(m_body);
        poipo_request({
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                //'Authorization' : 'Bearer '+process.env.SLACK_LEGACY_TOKEN
            },
            body: m_body_form_data,
            uri: 'https://slack.com/api/users.list',
            method: 'POST'
        }, function(err, res, body) {
            console.log("body " +body);
            console.log("res "+res);
            console.log("err "+err);
        });
    },

    poipo_request_slack_groups_list: function() {
        var m_body = {
            token : process.env.SLACK_LEGACY_TOKEN
        };
        var m_body_form_data = querystring.stringify(m_body);
        poipo_request({
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                //'Authorization' : 'Bearer '+process.env.SLACK_LEGACY_TOKEN
            },
            body: m_body_form_data,
            uri: 'https://slack.com/api/groups.list',
            method: 'POST'
        }, function(err, res, body) {
            console.log("body " +body);
            console.log("res "+res);
            console.log("err "+err);
        });
    },

    poipo_request_slack_channels_list: function() {
        /*
            For getting member of each channel
        */
        var m_body = {
            token : process.env.SLACK_LEGACY_TOKEN
        };
        var m_body_form_data = querystring.stringify(m_body);
        poipo_request({
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                //'Authorization' : 'Bearer '+process.env.SLACK_LEGACY_TOKEN
            },
            body: m_body_form_data,
            uri: 'https://slack.com/api/channels.list',
            method: 'POST'
        }, function(err, res, body) {
            console.log("body " +body);
            console.log("res "+res);
            console.log("err "+err);
        });
    },

    poipo_request_slack_users_info: function(slack_id) {
        var m_body = {
            token : process.env.SLACK_LEGACY_TOKEN,
            user : slack_id
        };
        var m_body_form_data = querystring.stringify(m_body);
        poipo_request({
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                //'Authorization' : 'Bearer '+process.env.SLACK_LEGACY_TOKEN
            },
            body: m_body_form_data,
            uri: 'https://slack.com/api/users.info',
            method: 'POST'
        }, function(err, res, body) {
            var data = JSON.parse(body, true);
            console.log(data.user.name);

            console.log("res "+res);
            console.log("err "+err);
        });
    },


}