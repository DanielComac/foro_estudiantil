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

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}

