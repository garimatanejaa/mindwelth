import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { useQuizAttempts } from '../hooks/useQuizAttempts';

export function QuizPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { addAttempt } = useQuizAttempts();
  const quiz = quizzes.find(q => q.id === quizId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Quiz not found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (optionIndex) => {
    const selectedOption = question.options[optionIndex];
    const newAnswers = [...answers, selectedOption.score];
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const score = newAnswers.reduce((acc, curr) => acc + curr, 0);
      const result = quiz.getResult(score);

      addAttempt({
        quizId: quiz.id,
        score,
        result,
        date: new Date().toISOString(),
      });

      setShowResult(true);
    }
  };

  if (showResult) {
    const score = answers.reduce((acc, curr) => acc + curr, 0); // Fixed incorrect sum calculation
    const result = quiz.getResult(score);

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed!</h2>
            <p className="text-xl text-gray-600 mb-6">Your score: {score}</p>
            <p className="text-xl text-gray-600 mb-6">Your result: {result}</p>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/quizzes')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
              </button>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/quizzes')}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              {question.text}
            </h2>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {option.text} {/* Fixed incorrect rendering of options */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
