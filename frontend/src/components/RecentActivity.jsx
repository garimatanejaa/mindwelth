{/*import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { quizzes } from "../data/quizzes";
import axios from "axios";

export function RecentActivity({ userId }) {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:5000/attempts/${userId}`)
      .then(response => setAttempts(response.data))
      .catch(error => console.error("Error fetching attempts:", error));
  }, [userId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Clock className="mr-2 h-5 w-5" />
        Recent Activity
      </h2>
      {attempts.length === 0 ? (
        <p className="text-gray-500">No quizzes attempted yet</p>
      ) : (
        <div className="space-y-4">
          {attempts.map((attempt, index) => {
            const quiz = quizzes.find(q => q.id === attempt.quizId);
            return (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-medium">{quiz?.title}</h3>
                <p className="text-sm text-gray-600">Result: {attempt.result}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(attempt.date), "PPp")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}*/}
import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // To format the date

export function RecentActivity({ attempts = [] }) { // Default to empty array if attempts is undefined
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
      {attempts.length === 0 ? (
        <p className="text-gray-600">No recent quiz attempts.</p>
      ) : (
        attempts.slice(0, 5).map((attempt, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <h3 className="text-lg font-medium text-gray-900">{attempt.quizTitle}</h3>
            <p className="text-sm text-gray-500">{formatDistanceToNow(new Date(attempt.date))} ago</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-gray-600">Score: {attempt.score}</span>
              <span className="ml-4 text-sm text-gray-600">Result: {attempt.result}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}


