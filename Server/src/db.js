import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("MrCo-1324-5768@cluster0.qi1p51y.mongodb.net/");
        console.log('Base de datos conectada');

    } catch (error) {

        console.log(error);
    }
}