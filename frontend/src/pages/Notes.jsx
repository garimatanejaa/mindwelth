
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NoteModal from '../components/NoteModal';
import axios from 'axios';
import { Trash2 } from 'lucide-react';

const Notes = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/note/all',{
        headers: {
          Authorization: `Bearer ${token}`,  // Added token in the request header for authorization
        },
      });
      console.log('Notes fetched:', response.data);
      setNotes(response.data);
    } catch (err) {
      console.error("Error fetching notes:", err.response || err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: '2-digit' 
    });
  };

  const handleDelete = async (id) => {
    try {
     const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/note/delete/${id}`,
        {
            headers: {
              Authorization: `Bearer ${token}`,  // Added token in the request header for authorization
            },}
      );
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen bg-purple-200 p-8">
        <h1 className="text-4xl font-bold text-purple-900">How are you feeling today?</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {notes.map((note) => (
            <div key={note._id} className="bg-purple-900 p-4 rounded-lg shadow-lg relative">
              <Trash2 
                className="absolute top-2 right-2 cursor-pointer text-gray-300 hover:text-red-500 transition-colors"
                size={20}
                onClick={() => handleDelete(note._id)}
              />
              <div className="text-sm text-gray-400 mb-2">
                {formatDate(note.createdAt)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{note.title}</h3>
              <p className="text-gray-300">{note.description}</p>
              <div className="text-2xl mt-2">
                {note.satisfaction ? ['😢', '😕', '😐', '🙂', '😊'][note.satisfaction - 1] : '😐'}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setModalOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-500 text-white font-bold text-3xl rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-300"
        >
          +
        </button>

        {isModalOpen && (
          <NoteModal 
            onClose={() => setModalOpen(false)}
            onSave={() => {
              fetchNotes();
              setModalOpen(false);
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export default Notes;
