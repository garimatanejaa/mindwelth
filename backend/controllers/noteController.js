const Note = require('../models/Note');

// Add a new note
exports.addNote = async (req, res) => {
  try {
    const { title, description, satisfaction } = req.body;
    const userId = req.userId;  // Get the authenticated user's ID

    // Validate input
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    // Create new note
    const newNote = new Note({
      title,
      description,
      satisfaction,
      userId,  // Associate note with the authenticated user
    });

    // Save note to database
    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error adding note', error: error.message });
  }
};

// Get all notes for the authenticated user
exports.getAllNotes = async (req, res) => {
  try {
    const userId = req.userId;  // Get the authenticated user's ID
    const notes = await Note.find({ userId }).sort({ createdAt: -1 });  // Fetch notes specific to the user

    if (!notes) {
      return res.status(404).json({ message: 'No notes found' });
    }

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;  // Get the authenticated user's ID

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Ensure the note belongs to the authenticated user
    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this note' });
    }

    // Delete note
    await Note.findByIdAndDelete(id);

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};
