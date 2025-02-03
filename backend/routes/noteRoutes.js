const express = require('express');
const router = express.Router();
const { addNote, getAllNotes, deleteNote } = require('../controllers/noteController');
const authenticateUser = require('../middleware/authenticateUser');  // Import the authentication middleware

// Protect the routes with the authenticateUser middleware
router.post('/add', authenticateUser, addNote);  // Only authenticated users can add notes
router.get('/all', authenticateUser, getAllNotes);  // Only authenticated users can view their notes
router.delete('/delete/:id', authenticateUser, deleteNote);  // Only authenticated users can delete notes

module.exports = router;
