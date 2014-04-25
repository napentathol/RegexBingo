
/*
 * GET users listing.
 */

exports.createObject = function(userModel){
    return {
        list : function(req, res){
            res.send(JSON.stringify(userModel.list));
        },
        update : function(req, res){
            var user = userModel.findUserFromRequest(req);
            user.username=req.body.username;
            res.send(JSON.stringify(user.username));
        }
    };
};