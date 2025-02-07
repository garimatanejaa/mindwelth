import React, { useState } from 'react';
import { Smile, Frown, Meh } from 'lucide-react';

const MoodEmoticons = {
  'Happy': { icon: Smile, color: 'text-green-600' },
  'Neutral': { icon: Meh, color: 'text-gray-600' },
  'Sad': { icon: Frown, color: 'text-blue-600' }
};

function QuickMoodCheck() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    const newMoodEntry = {
      mood,
      timestamp: new Date().toLocaleString()
    };

    setSelectedMood(mood);
    setMoodHistory(prev => [...prev, newMoodEntry]);
  };

  return (
    <div className="bg-purple-100 rounded-lg p-6 flex flex-col items-center">
      <Smile className="h-10 w-10 text-purple-900 mb-4" />
      <h2 className="text-xl font-semibold text-purple-900">Quick Mood Check</h2>
      
      {!selectedMood ? (
        <>
          <p className="text-purple-700 mt-2 text-center">How are you feeling today?</p>
          <div className="flex space-x-4 mt-4">
            {Object.keys(MoodEmoticons).map((mood) => {
              const { icon: Icon, color } = MoodEmoticons[mood];
              return (
                <button 
                  key={mood}
                  onClick={() => handleMoodSelect(mood)}
                  className={`${color} hover:bg-purple-200 p-2 rounded-full`}
                >
                  <Icon className="h-8 w-8" />
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-purple-800 font-semibold">
            You are feeling {selectedMood.toLowerCase()} today
          </p>
          <button 
            onClick={() => setSelectedMood(null)}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Reset Mood
          </button>
        </div>
      )}

      
    </div>
  );
}

export default QuickMoodCheck;