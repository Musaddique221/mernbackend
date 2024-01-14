
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createUser, allUsers, getUserById, updateUser, deleteUser} from "./routes/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.post("/createUser", createUser);
app.get("/", allUsers);
app.get("/editUser/:id", getUserById);
app.put("/editUser/:id", updateUser);
app.delete("/deleteUser/:id", deleteUser)

app.listen(3001, () => {
	console.log("server is running");
});


