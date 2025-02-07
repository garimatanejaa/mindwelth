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
app.use(cors({
    origin: ["https://mindwelth-frontend.vercel.app"],
    methods : ["POST","OPTIONS"],
    credentials: true
}));
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Authentication Routes
app.post('/api/signup', async (req, res) => {
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

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

app.post('/api/signin', async (req, res) => {
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

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Authentication Middleware
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
app.get("/", (req, res) => {
    res.send("Welcome to the MindWelth API!");
});

const noteRoutes = require('./routes/noteRoutes');
app.use('/api/note', noteRoutes);
const attemptRoutes = require("./routes/attemptRoutes"); 
app.use("/api/attempts", attemptRoutes); 
module.exports = app;
