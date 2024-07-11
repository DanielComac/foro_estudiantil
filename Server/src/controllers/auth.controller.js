import User from '../models/user.model.js';
import { crearTokenAcceso } from '../libs/jwt.js';

export const registro = async (req, res) => {
    try {
        const {email, password, username} = req.body;
        const newUser = new User({
            username,
            email,
            password
        })

        const userSaved = await newUser.save();
        const token = await crearTokenAcceso({id:userSaved._id})

        res.cookie("token", token);
        res.json({mensaje : "usuario creado"})

    } catch(error){
        console.log(error);

    }
    
    
};

export const login = async (req, res) => {

    const {email, password } = req.body;
    try {
        const usuarioEncontrado = await User.findOne({email})
        if(!usuarioEncontrado) return res.status(400).json({mensaje:"Usuario no encontrado"});

        const pass = await usuarioEncontrado.password;
        if (pass !== password) return res.status(400).json({mensaje:"Contraseña incorrecta"})
        
        const token = await crearTokenAcceso({id:usuarioEncontrado._id})

        res.cookie("token", token);
        res.json({mensaje : "Bienvenido"})

    } catch(error){
        console.log(error);

    }
    
    
};

export const logout = async (req, res) => {
    try {
        res.cookie('token', "", {
            expires: new Date(0),
            httpOnly: true, // Opcional: asegura que la cookie solo se envíe en peticiones HTTP(S) y no pueda ser accedida desde JavaScript
            secure: true   // Opcional: asegura que la cookie solo se envíe a través de HTTPS
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during logout" });
    }
};


