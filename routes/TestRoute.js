/**
 * Created by Alex on 3/24/2014.
 */

exports.test = {
    handleRequest : function(req, res){
        res.send("Response: "+exports.test.iterate++);
    },
    iterate : 0
};