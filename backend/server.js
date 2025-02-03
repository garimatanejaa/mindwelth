
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config(); // Corrected import
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('./models/users');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const noteRoutes = require('./routes/noteRoutes');
app.use('/note', noteRoutes);
const attemptRoutes = require("./routes/attemptRoutes");
app.use("/attempts", attemptRoutes);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET ;
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});
app.post('/signin', async (req, res) => {
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

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// Middleware to Protect Routes
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
app.get('/profile', authenticateUser, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password"); // Exclude password
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user profile" });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
