import mongoose from "mongoose";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Conectado ao mongoDB")
    } catch (error) {
        console.log("Error ao conectar ao mongoDB", error.message)
    }
}

export default connectToMongo;