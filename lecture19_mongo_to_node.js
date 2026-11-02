/*
Schema banata hai -> defines the structure

Schema se Model banta hai

Model se CRUD operations perform karte hain
*/

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


// 1. Schema

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    jobtitle: {
        type: String
    }

}, {
    timestamps: true
});


// 2. Model

const User = mongoose.model("user", userSchema);


// 3. Homepage - Only Name and Email

app.get("/", async (req, res) => {

    try {

        const users = await User.find()
            .select("firstname email -_id");

        const result = users.map(user =>
            `${user.firstname} - ${user.email}`
        );

        res.send(result.join("<br>"));

    }
    catch (err) {
        res.status(500).send(err.message);
    }

});


// 4. POST API - Create User

app.post("/users", async (req, res) => {

    try {

        const user = await User.create(req.body);

        return res.status(201).json({
            message: "User created successfully",
            user: user
        });

    }
    catch (err) {

        return res.status(400).json({
            message: "Error creating user",
            error: err.message
        });

    }

});


// 5. GET API - Get All Users

app.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        return res.status(200).json(users);

    }
    catch (err) {

        return res.status(500).json({
            error: err.message
        });

    }

});


// 6. GET API - Find User By ID

app.get("/users/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).json(user);

    }
    catch (err) {

        return res.status(400).json({
            error: err.message
        });

    }

});


// 7. PUT API - Edit User By ID

app.put("/users/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).json({
            message: "User updated successfully",
            user: user
        });

    }
    catch (err) {

        return res.status(400).json({
            error: err.message
        });

    }

});


// 8. DELETE API - Delete User By ID

app.delete("/users/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).json({
            message: "User deleted successfully"
        });

    }
    catch (err) {

        return res.status(400).json({
            error: err.message
        });

    }

});


// 9. MongoDB Connection + Server Start

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/first_db");

    console.log("MongoDB connected");

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });

}

main().catch((err) => {
    console.log("Database connection error:", err);
});