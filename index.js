import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerInform from "./src/routes/inform.Route.js"


//senting
const app = express()
const port = process.env.PORT || 7000;

//middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use("/api", routerInform);

//routes
app.get("/", (req, res) => {
    res.send("Api Activa");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch ((error) => console.log(error));

//serve listening
app.listen(port, () => console.log("Serve Activo", port));