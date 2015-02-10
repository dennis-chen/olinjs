var Twot = require('../models/twot_model.js').twot;
var User = require('../models/user_model.js').user;

var login_page = function(req,res){
    res.render('login');
};

var login_submit = function(req,res){
    var login_user = req.body.login_username;
    User.findOne({name:login_user}).exec(function(err,user){
        if(err){
          res.status(404).send('Server error while finding username!');
        } else {
            if(!user){
                var user_info = {name:login_user,twots:[]};
                var new_user = new User(user_info);
                new_user.save(function (err) {
                    if (err){
                        res.status(404).send('Server error while creating new user!');
                    } else {
                        res.send('Success!');
                    }
                });
            } else {
                res.send('Success!');
            }
        }
    });
};

var home = function(req,res){
    res.render('home');
};


var submit_twot = function(req,res){
    res.send("Submitted twot! Here's the info you need to update!");
};

var logout = function(req,res){
};

module.exports.login_page = login_page;
module.exports.login_submit = login_submit;
module.exports.home = home;
module.exports.submit_twot = submit_twot;
module.exports.logout = logout;
