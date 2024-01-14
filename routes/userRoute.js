import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// create user
const createUser = asyncHandler(async (req, res) => {
	console.log(req.body);
	const { name, email, age } = req.body;

	const user = await User.create({ name, email, age });

	if (user) {
		res
			.json({
				name: user.name,
				email: user.email,
				age: user.age,
			})
			.status(200);
	} else {
		res.status(400);
		throw new Error("Invalid user Data");
	}
});

// get user

const allUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	if (users) {
		res.json(users).status(200);
	} else {
		res.status(404);
		throw new Error("No User found");
	}
});

// get existing user deta for edit

const getUserById = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const userExist = await User.findById(id);
	if (userExist) {
		res.json(userExist).status(200);
	} else {
		res.status(404);
		throw new Error("user not found");
	}
});

// update user

const updateUser = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const updateUser = await User.findByIdAndUpdate(id);

	if (updateUser) {
		(updateUser.name = req.body.name),
			(updateUser.email = req.body.email),
			(updateUser.age = req.body.age);

		const updatedUser = await updateUser.save();
		res.json(updatedUser).status(200);
	} else {
		res.status(404);
		throw new Error("user not found");
	}
});

// delete user

const deleteUser = asyncHandler(async (req, res) => {
	const id = req.params.id;
	console.log(id);
	const user = await User.findByIdAndDelete(id);
	if (user) {
		res.json(user).status(200);
	} else {
		res.status(404);
		throw new Error("no Found");
	}
});
export { createUser, allUsers, getUserById, updateUser, deleteUser };
