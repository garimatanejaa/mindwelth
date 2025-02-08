const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config(); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('./models/users');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Handle preflight requests
app.options('/api/signin', cors());
app.options('/api/signup', cors());

// Sign-up route
app.post('/api/signup', async (req, res) => {
    console.log("Sign-up request received:", req.body); // Log the request body
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword 
        });
        await newUser.save();

        console.log("User created successfully:", newUser.email); // Log successful sign-up
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Sign-up error:", error); // Log errors
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

// Sign-in route
app.post('/api/signin', async (req, res) => {
    console.log("Sign-in request received:", req.body); // Log the request body
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Login successful for user:", user.email); // Log successful login
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Login error:", error); // Log errors
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the MindWelth API!");
});

// Other routes
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/note', noteRoutes);
const attemptRoutes = require("./routes/attemptRoutes"); 
app.use("/api/attempts", attemptRoutes); 

// Start the server
const PORT = process.env.PORT || 5000; // Use environment variable or fallback to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;