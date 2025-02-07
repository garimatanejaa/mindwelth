
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
      await axios.post('https://mindwelth.vercel.app/api/attempts/submit', {
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
      const response = await axios.get("https://mindwelth.vercel.app/api/attempts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setAttempts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch attempts");
      setLoading(false);
    }
  };

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


