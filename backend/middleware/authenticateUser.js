//backend/middleware/authenticateUser.js
const jwt = require("jsonwebtoken");
const User = require('../models/users');
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to Protect Routes
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];  // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);  // Verify the token
        req.userId = decoded.userId;  // Attach userId to the request object
        next();  // Call the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authenticateUser;
