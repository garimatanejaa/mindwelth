import React from 'react';
import { Brain } from 'lucide-react';
import { QuizCard } from '../components/QuizCard';
import { RecentActivity } from '../components/RecentActivity';
import { quizzes } from '../data/quizzes';
import { useQuizAttempts } from '../hooks/useQuizAttempts';
import Layout from '../components/Layout';

export function QuizList({userId}) {
  const { attempts, addAttempt , loading, error} = useQuizAttempts(userId);
  //if (loading) return <p>Loading...</p>;
 // if (error) return <p>Error: {error}</p>;
  return (
    <Layout>
      <div className="min-h-screen bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900 flex items-center justify-center">
              <Brain className="mr-3 h-10 w-10 text-purple-600" />
              Psychology Quizzes
            </h1>
            <p className="mt-4 text-xl text-purple-600">
              Discover more about yourself through our interactive quizzes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quizzes.map(quiz => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <RecentActivity attempts={attempts} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
