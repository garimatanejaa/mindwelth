const express = require('express');
const router = express.Router();
const { addNote, getAllNotes, deleteNote } = require('../controllers/noteController');
const authenticateUser = require('../middleware/authenticateUser');


router.post('/add', authenticateUser, addNote);  
router.get('/all', authenticateUser, getAllNotes);
router.delete('/delete/:id', authenticateUser, deleteNote); 

module.exports = router;
