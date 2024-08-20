import User from '../models/user.model.js';

export const getUser = async (req, res) => {
    
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

        if(!users) return res.json({mensaje:"Usuarios no encontrados"})

    } catch(error) {
        res.json({mensaje: "Error"})

    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({mensaje:"Usuario actualizado"});

        if(!user) return res.json({mensaje:"No existe el usuario"})

    } catch(error) {
        res.json({mensaje: "Error al actualizar"})

    }


}

export const deleteUser = (req, res) => {

}

