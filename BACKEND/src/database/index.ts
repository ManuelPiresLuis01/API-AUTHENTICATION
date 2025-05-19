import { connect } from "mongoose";

export const connectDB = async () => {

    await connect(process.env.MONGO_URL)
        .then(() => console.log("Database connected"))
        .catch(error => console.error("Erro in connection", error))
}