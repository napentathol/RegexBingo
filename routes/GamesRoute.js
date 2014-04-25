/**
 * Created by Alex on 4/25/2014.
 */

exports.createObject = function(gamesModel, userModel){
    return {
        list : function(req, res){
            res.send(JSON.stringify(gamesModel.list));
        },
        add : function(req, res){
            var user = userModel.findUserFromRequest(req);
            gamesModel.createGame("normal", user);
            res.send("success!");
        }
    };
};
