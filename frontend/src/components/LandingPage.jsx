import React from 'react';
import { Brain, Sparkles, Heart, Moon, Gamepad2, FileText, Users, MessageCircle } from 'lucide-react';

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
            Unlock the power of your mind with our holistic approach to well-being. Engage in games, track your emotions, seek guidance from our AI therapist, and enhance your mental resilience. Start your journey to a healthier mind today.
          </p>
          <a
            href="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Begin Your Journey
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 relative">
  <div className="md:col-span-2">
    {/* Quizzes */}
    <Feature icon={<Sparkles />} title="Quizzes" description="Engage in interactive quizzes designed to assess and improve your mental well-being." />
    {/* Mood Tracker */}
    <Feature icon={<Heart />} title="Mood Tracker" description="Log your emotions daily and gain insights into your mental health trends." />
    {/* AI Therapist */}
    <Feature icon={<Moon />} title="AI Therapist" description="Chat with our AI-powered therapist for guidance, coping strategies, and emotional support." />
    {/* Games */}
    <Feature icon={<Gamepad2 />} title="Mindful Games" description="Play scientifically designed games to boost cognitive function and mental clarity." />
    {/* Resources */}
    <Feature icon={<FileText />} title="Resources" description="Access articles, books, and self-help guides to deepen your understanding of mental wellness." />
    {/* Community */}
    <Feature icon={<Users />} title="Community Support" description="Join a community of like-minded individuals to share experiences and encouragement." />
  </div>

  {/* Right Side Image with Animation */}
  <div className="hidden md:block relative">
    <img
      src="./public/mentalhealth.jpeg"
      alt="Mental Wellness"
      className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-floating"
    />
    <br></br>
    <img
      src="./public/mentalwelth3.png"
      alt="Mental Wellness"
      className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-floating"
    />
    <br></br>
    <img
      src="./public/mentalwelth2.jpg"
      alt="Mental Wellness"
      className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-floating"
    />
  </div>
</div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6 mt-12 text-center">
        <p className="text-lg">Made with ☕️ + Garima</p>
        <p className="text-sm mt-2">© 2025 MindWelth. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;
