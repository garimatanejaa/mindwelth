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
              <span className="text-sm text-gray-600">Quiz Attempted: {attempt.quizId}</span>
              <span className="ml-4 text-sm text-gray-600">Result: {attempt.result}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}


