/**
 * Created by Alex on 3/27/2014.
 */

exports.list = [];

exports.createGame = function(t, o){
    var game = {
        type : t,
        owner : o,
        userList : [o],
        addUser : function(user){
            game.userList.push(user);
        },
        removeUser : function(user){
            var index = game.userList.indexOf(user);
            game.userList.splice(index,1);
        }
    };
    exports.list.push(game);
    return game;
};
