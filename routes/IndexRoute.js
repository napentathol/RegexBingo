
/*
 * GET home page.
 */

exports.createObject = function(userModel){
    return {
        index : function(req, res){
            var user = userModel.findUserFromRequest(req);
            res.render('index', { username: user.username });
        }
    };
};