import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    descripcion : {
        type: String,
        require: true,
        trim: true,
    },
    publicacion_id :{
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Comentario', userSchema)