module.exports = function(req, res, next){
    if(req.session.usuario == undefined || req.session.usuario == ""){
        console.log('No hay nadie logueado.');
    } else {
        console.log(`Está logueado el usuario ${req.session.usuario}`);
    }
    next();
}