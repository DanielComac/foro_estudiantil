import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    titulo : {
        type: String,
        require: true,
        trim: true
    },
    descripcion : {
        type: String,
        require: true,
        trim: true,
    },
    url: {
        type: String,
        trim: true
    },
    materia: {
        type: String,
        require: true,
        trim: true
    },
    user : {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Publicacion', userSchema)