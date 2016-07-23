module.exports = exports = function(app, User, bcrypt, token){

    app.get('/register', token, function(req, res){
        registerCtrl.registerGet(req, res);
    });

    app.post('/register', token, function(req, res){
        registerCtrl.registerPost(req, res, User, bcrypt);
    });

    app.delete('/register', token, function(req, res){
        registerCtrl.registerGet(req, res);
    });

    app.update('/register', token, function(req, res){
        registerCtrl.registerPost(req, res, User, bcrypt);
    });

}
