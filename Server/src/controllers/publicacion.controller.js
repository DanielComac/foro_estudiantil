import Publicacion from '../models/publicacion.model.js';

export const getPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json(publicaciones);

        if(!publicaciones) return res.json({mensaje:"No hay publicaciones"})

    } catch(error) {
        res.json({mensaje: "Error al obtener las publicaciones"})

    }
}

export const getPublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        res.json(publicacion);

        if(!publicacion) return res.json({mensaje:"No existe esa publicacion"})

    } catch(error) {
        res.json({mensaje: "Error al obtener la publicacion"})

    }
}

export const postPublicacion = async (req, res) => {
    try {
        const {titulo, descripcion, materia} = req.body;
        const newPublicacion = new Publicacion({
            titulo,
            descripcion,
            materia,
            user: req.user.id
        })

        await newPublicacion.save();
        res.json({mensaje : "Publicacion creada"})

    } catch(error){
        res.json({mensaje:"Error al crear la publicación"})

    }
}

export const putPublicacion = async (req, res) => {

    try {
        const publicacion = await Publicacion.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({mensaje:"Publicación actualizada"});

        if(!publicacion) return res.json({mensaje:"No existe la publicacion"})

    } catch(error) {
        res.json({mensaje: "Error al actualizar la publicacion"})

    }
}

export const deletePublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findByIdAndDelete(req.params.id);
        res.status(204).json({mensaje:"Publicación eliminada"});

        if(!publicacion) return res.json({mensaje:"No existe la publicacion"})

    } catch(error) {
        res.json({mensaje: "Error al obtener la publicacion"})

    }
}