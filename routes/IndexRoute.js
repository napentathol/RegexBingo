
/*
 * GET home page.
 */

exports.createObject = function(userModel){
    return {
        index : function(req, res){
            var user = userModel.findUserFromRequest(req);
            res.render('index', { username: user.username });
            res.cookie('regexKey', user.key, {
                maxAge: 360000,
                path: '/',
                httpOnly: false
            });
        }
    };
};