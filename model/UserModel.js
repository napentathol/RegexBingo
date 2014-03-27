/**
 * Created by Alex on 3/26/2014.
 */


exports = {
    list : [],
    createUser : function() {
        var user = {
            key : exports.createKey(),
            username : "Some User"
        };
        exports.list.push(user);
        return user;
    },
    createKey : function() {
        var key="";
        for(var i=0;i<64;i++){
            key+=exports.seed.charAt(exports.randomInt(0,63))
        }
        return key;
    },
    randomInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    seed:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-"
};
