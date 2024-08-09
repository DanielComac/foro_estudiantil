import Comentario from '../models/comentarios.model.js';

export const getComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.json(comentarios);

        if(!comentarios) return res.json({mensaje:"No hay comentarios"})

    } catch(error) {
        res.json({mensaje: "Error al obtener las comentarios"})

    }
}

export const getComentario = async (req, res) => {
    try {
        const comentarios = await Comentario.findById(req.params.id);
        res.json(comentarios);

        if(!comentarios) return res.json({mensaje:"No existe el comentario"})

    } catch(error) {
        res.json({mensaje: "Error al obtener el comentario"})

    }
}

export const postComentario = async (req, res) => {
    try {
        const {descripcion, publicacion_id} = req.body;
        const newComentario = new Comentario({
            descripcion,
            publicacion_id
        })

        await newComentario.save();
        res.json({
            mensaje : "comentario enviado",
            publicacion_id: req.body.publicacion_id
        })

    } catch(error){
        res.json({mensaje:"Error al enviar el comentario"})

    }
}

export const putComentario = async (req, res) => {

    try {
        const comentarios = await Comentario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({mensaje:"comentario actualizado"});

        if(!comentarios) return res.json({mensaje:"No existe el comentario"})

    } catch(error) {
        res.json({mensaje: "Error al actualizar el comentario"})

    }
}

export const deleteComentario = async (req, res) => {
    try {
        const comentarios = await Comentario.findByIdAndDelete(req.params.id);
        res.json({mensaje:"comentario eliminado"});

        if(!comentarios) return res.json({mensaje:"No existe el comentario"})

    } catch(error) {
        res.json({mensaje: "Error al eliminar el comentario"})

    }
}