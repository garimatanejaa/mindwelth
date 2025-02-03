import React from 'react';
import { Brain, Sparkles, Heart, Moon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">MindWelth</span>
          </div>
          <div className="space-x-4">
          <a href="/aboutus" className="text-gray-600 hover:text-purple-600">About Us</a>
            <a href="/signin" className="text-gray-600 hover:text-purple-600">Sign In</a>
            <a href="/signup" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
           Mental Wellness is the 
            <span className="text-purple-600"> Greatest Wealth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Unlock the power of your mind with our holistic approach to well-being. Through guided meditation, mindfulness practices, and expert-led wellness programs, cultivate inner peace and emotional resilience. Start your journey to a healthier, wealthier mind today.
          </p>
          <a
            href="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quizzes              </h3>
              <p className="text-gray-600">Expert-led sessions to help you find inner peace and clarity.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mood Tracker</h3>
              <p className="text-gray-600">Comprehensive tools and resources for your mental health journey.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Moon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Therapist</h3>
              <p className="text-gray-600">Improve your sleep quality with calming exercises and routines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;