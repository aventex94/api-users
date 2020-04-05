const models = require('../models');

module.exports = {
    v1: {
        createComentario:createComentario,    

    }
};

function createComentario(req,res){
    models.Comentario.create({
        contenido:req.body.contenido,
        PublicacionId:req.body.publicacion_id,
        UserUid: req.body.user_id
    }).then((comentario)=>{
        models.User.findByPk(comentario.UserUid).then(user=>{
            var respuesta = {
                creador: user.name,
                comentario:comentario,
            }
            res.status(200).send(respuesta)
        })
        
    }).catch((err)=>{   
        res.status(500).send(err);
    })
}