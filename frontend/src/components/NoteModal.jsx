
import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

const NoteModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null); 
  const [satisfaction, setSatisfaction] = useState(0);
  const [success, setSuccess] = useState(null); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description cannot be empty.");
      return;
    }

    try {
      
      const token = localStorage.getItem('token'); 

      if (!token) {
        setError("You must be logged in to add a note.");
        return;
      }

      const response = await axios.post('https://mindwelth.vercel.app/api/note/add', { 
        title, 
        description, 
        satisfaction 
      }, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

     
      setSuccess("Note added successfully!");
      setError(null);
      onSave();
      navigate("/notes");
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to save the note. Please try again.");
      setSuccess(null); 
    }
  };

  const emojis = ['😢', '😕', '😐', '🙂', '😊'];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-purple-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Note</h2>

        {error && <p className="text-red-400 mb-2">{error}</p>}
        {success && <p className="text-green-400 mb-2">{success}</p>}  {/* Success message */}

        <input 
          type="text" 
          placeholder="How are you feeling?" 
          className="w-full p-2 mb-3 bg-purple-900 rounded-md border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea 
          placeholder="Gossip about what happened today..." 
          className="w-full p-2 h-24 bg-purple-900 rounded-md border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="mb-4">
          <p className="mb-2">How satisfied do you feel today?</p>
          <div className="flex justify-between">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => setSatisfaction(index + 1)}
                className={`text-2xl hover:scale-125 ${satisfaction === index + 1 ? 'scale-125' : ''} transition-transform`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button 
            onClick={onClose} 
            className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
