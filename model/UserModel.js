/**
 * Created by Alex on 3/26/2014.
 */


exports.list = [];

exports.createUser = function(ip) {
    var user = {
        key : exports.createKey(),
        ip : ip,
        username : "Some User",
        sendCookie : true
    };
    exports.list.push(user);
    return user;
};

exports.createKey = function() {
    var key="";
    for(var i=0;i<64;i++){
        key+=exports.seed.charAt(exports.randomInt(0,63))
    }
    return key;
};

exports.randomInt = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.findUser = function(ip,key){
    for(var i in exports.list) {
        if (exports.list.hasOwnProperty(i)) {
            if (exports.list[i].key === key && exports.list[i].ip === ip) {
                return exports.list[i];
            }
        }
    }
    return null;
};

exports.findOrCreateUser = function(ip, key) {
    var user = exports.findUser(ip,key);
    if(user === null){
        user = exports.createKey(ip);
    }
    return user;
};

exports.getCookieFromRequest = function(req){
    if(req.cookies.hasOwnProperty("regexKey")){
        return req.cookies.regexKey;
    }
    return null;
};

exports.findUserFromRequest = function(req){
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var key = exports.getCookieFromRequest(req);
    return exports.findOrCreateUser(ip,key);
};

exports.seed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-";

