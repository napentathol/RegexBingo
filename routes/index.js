
/*
 * GET home page.
 */

exports.createObject = function(userModel){
    return {
        index : function(req, res){
            userModel.createUser();
            res.render('index', { title: 'Express' });
        }
    };
};