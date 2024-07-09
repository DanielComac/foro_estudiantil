import Publicacion from '../models/publicacion.model.js';

export const publicacion = async (req, res) => {
    try {
        const {titulo, descripcion} = req.body;
        const newPublicacion = new Publicacion({
            titulo,
            descripcion
        })

        await newPublicacion.save();
        res.json({mensaje : "Publicacion creada"})

    } catch(error){
        console.log(error);

    }

}