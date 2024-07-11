import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    descripcion : {
        type: String,
        require: true,
        trim: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('Comentario', userSchema)