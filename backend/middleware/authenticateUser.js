
const jwt = require("jsonwebtoken");
const User = require('../models/users');
const JWT_SECRET = process.env.JWT_SECRET;


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

module.exports = authenticateUser;
