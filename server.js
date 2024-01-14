
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import { createUser, allUsers, getUserById, updateUser, deleteUser} from "./routes/userRoute.js";

const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/createUser", createUser);
app.get("/", allUsers);
app.get("/editUser/:id", getUserById);
app.put("/editUser/:id", updateUser);
app.delete("/deleteUser/:id", deleteUser)


const PORT = process.env.PORT || 3001



app.listen(PORT, () => {
	console.log("server is running");
});


