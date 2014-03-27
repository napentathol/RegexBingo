
/*
 * GET users listing.
 */

exports.createObject = function(userModel){
    return {
        list : function(req, res){
            res.send(JSON.stringify(userModel.list));
        }
    };
};