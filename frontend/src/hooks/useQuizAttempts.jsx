// hooks/useQuizAttempts.jsx
{/*import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to manage quiz attempts for a specific user
export function useQuizAttempts(userId) {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    if (!userId) return; // Prevent fetching if userId is not available

    // Fetch all attempts for the given userId
    axios.get(`http://localhost:5000/attempts/${userId}`)
      .then(response => setAttempts(response.data))
      .catch(error => console.error("Error fetching attempts:", error));
  }, [userId]); // Dependency array ensures refetch only when userId changes

  // Function to add a new attempt
  const addAttempt = (newAttempt) => {
    if (!userId) return; // Prevent adding if userId is not set
   
    // Make a POST request to submit a new attempt
    axios.post(`http://localhost:5000/attempts/submit`, { ...newAttempt, userId })
      .then(response => {
        // Update state with the new attempt
        setAttempts(prevAttempts => [...prevAttempts, response.data.attempt]);
      })
      .catch(error => console.error("Error adding attempt:", error));
  };

  return { attempts, addAttempt };
}*/}

{/*import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to manage quiz attempts for a specific user
export function useQuizAttempts(userId) {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return; // Prevent fetching if userId is not available

    setLoading(true);

    // Fetch all attempts for the given userId
    axios.get(`http://localhost:5000/attempts/${userId}`)
      .then(response => {
        setAttempts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching attempts");
        setLoading(false);
        console.error("Error fetching attempts:", error);
      });
  }, [userId]); // Dependency array ensures refetch only when userId changes

  // Function to add a new attempt
  const addAttempt = (newAttempt) => {
    if (!userId) return; // Prevent adding if userId is not set

    // Make a POST request to submit a new attempt
    axios.post(`http://localhost:5000/attempts/submit`, { ...newAttempt, userId })
      .then(response => {
        // Update state with the new attempt
        setAttempts(prevAttempts => [...prevAttempts, response.data.attempt]);
      })
      .catch(error => {
        setError("Error adding attempt");
        console.error("Error adding attempt:", error);
      });
  };

  return { attempts, addAttempt, loading, error };
}*/}
import { useEffect, useState } from 'react';
import axios from 'axios';

export function useQuizAttempts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const addAttempt = async ({ quizId, score, result, date, userId }) => {
    setLoading(true);
    setError(null);

    try {
      // Make the API call to store the attempt in the backend
      await axios.post('http://localhost:5000/attempts/submit', {
        quizId,
        score,
        result,
        date,
        userId,
      },{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      await fetchAttempts();
      setLoading(false);
    } catch (err) {
      setError('Failed to record attempt');
      setLoading(false);
    }
  };
  const fetchAttempts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:5000/attempts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setAttempts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch attempts");
      setLoading(false);
    }
  };

  // Fetch attempts when the hook is first mounted
  useEffect(() => {
    fetchAttempts();
  }, []);

  return {
    addAttempt,
    fetchAttempts,
    attempts,
    loading,
    error,
  };
}


