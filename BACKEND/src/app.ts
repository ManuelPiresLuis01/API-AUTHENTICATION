import express from "express";
import cors from "cors";
import { xss } from "express-xss-sanitizer";
import { routes } from "./routes";
import { connectDB } from "./database"
const app = express()

app.use(express.json())
app.use(cors());
app.use(xss());

app.use("/api/v1", routes)

app
    .listen(3000, "0.0.0.0")
    .on("listening", () => {
        console.log("Server is running on address http://localhost:3000/api/v1")
    });

connectDB();