module.exports = function(req, res, next){
    res.locals.usuario = false;

    if(req.session.usuario) {
        res.locals.usuario = req.session.usuario;
    }
    next();
}