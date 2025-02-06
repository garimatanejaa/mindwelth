const Note = require('../models/Note');

exports.addNote = async (req, res) => {
  try {
    const { title, description, satisfaction } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newNote = new Note({
      userId: req.userId, 
      description,
      satisfaction: satisfaction || 0
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).json({ 
      message: 'Error adding note', 
      error: error.message 
    });
  }
};

exports.getAllNotes = async (req, res) => {
  try {

    const notes = await Note.find({ userId: req.userId }).sort({ createdAt: -1 });

    if (!notes || notes.length === 0) {
      return res.status(404).json({ message: 'No notes found' });
    }

    res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ 
      message: 'Error fetching notes', 
      error: error.message 
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "You don't have permission to delete this note" });
    }

    await Note.findByIdAndDelete(id);

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ 
      message: 'Error deleting note', 
      error: error.message 
    });
  }
};
