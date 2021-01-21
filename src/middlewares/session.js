module.exports = function(req, res, next){
    if(req.session.usuario == undefined || req.session.usuario == ""){
        console.log('No hay nadie logueado.');
    } else {
        console.log(`El usuario logueado es ${req.session.usuario.name}`);
        console.log(`El ID del usuario es ${req.session.usuario.id}`)
    }
    next();
}