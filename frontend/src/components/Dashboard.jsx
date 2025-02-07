import { useState } from 'react';
import { Brain, Menu, X, Info, BookOpen, Smile, Calendar, FileText, Activity, Headphones, Download  } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import QuickMoodCheck from './MoodCheck';
import { RecentActivity } from './RecentActivity';

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Mood Logs', href: '/notes' },
    { name: 'Quizzes', href: '/quizzes' },
    { name: 'AI Therapist', href: '/therapist' },
    { name: 'Resources', href: '/resources' },
    
  ];
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-600" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-6 text-center">
          Welcome to Your Mental Welth Club
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
        Because true "welth" isn’t just about money—it’s about a healthy mind, a peaceful heart, and a soul that feels at home. 💜
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Mood Check */}
          {/*<div className="bg-purple-100 rounded-lg p-6 flex flex-col items-center">
            <Smile className="h-10 w-10 text-purple-900 mb-4" />
            <h2 className="text-xl font-semibold text-purple-900">Quick Mood Check</h2>
            <p className="text-purple-700 mt-2">How are you feeling today?</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Check In
            </button>
          </div>*/}
           <QuickMoodCheck />

          {/* Upcoming Sessions */}
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center">
            <Calendar className="h-10 w-10 text-blue-900 mb-4" />
            <h2 className="text-xl font-semibold text-blue-900">Upcoming Sessions</h2>
            <p className="text-blue-700 mt-2">No upcoming sessions scheduled</p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:underline transition duration-300">
  Add a session
</button>
          </div>

          {/* Resources */}
          <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center">
            <FileText className="h-10 w-10 text-green-900 mb-4" />
            <h2 className="text-xl font-semibold text-green-900">Quick Resources</h2>
            <a href="/resources" className="text-green-800 font-medium hover:underline">
            <p className="text-green-700 mt-2">Access helpful materials and guides</p>
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-gray-50 rounded-lg p-6">
           {/* <p className="text-gray-600">No recent activity to display</p>*/}
           <RecentActivity/>
          </div>
        </div>

        {/* Mental Health Information */}
        <section className="mt-12">
          <div className="flex items-center justify-start mb-4">
            <Info className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-purple-900">Understanding Mental Health</h2>
          </div>
          <p className="text-lg text-gray-700">
            Mental health is just as important as physical health. This section covers various mental health conditions, their symptoms, and treatment options.
          </p>
        </section>

        {/* Books and Articles */}
        <section className="mt-12">
          <div className="flex items-center justify-start mb-4">
            <BookOpen className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-purple-900">Books and Articles</h2>
          </div>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li><strong>The Power of Now</strong> by Eckhart Tolle</li>
            <li><strong>Emotion Regulation</strong> by Adrian Wells</li>
            <li><strong>When the Body Says No</strong> by Gabor Maté</li>
          </ul>
        </section>

        {/* Mental Health Apps */}
        <section className="mt-12">
          <div className="flex items-center justify-start mb-4">
            <Download className="h-8 w-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-semibold text-purple-900">Mental Health Apps</h2>
          </div>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li><a href="https://www.headspace.com/" target="_blank" className="text-purple-600 hover:underline">Headspace</a> - Meditation & Mindfulness</li>
            <li><a href="https://www.calm.com/" target="_blank" className="text-purple-600 hover:underline">Calm</a> - Sleep & Relaxation</li>
            <li><a href="https://www.betterhelp.com/" target="_blank" className="text-purple-600 hover:underline">BetterHelp</a> - Online Therapy</li>
          </ul>
        </section>
      </div>
    </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
              <p className="text-gray-600">24/7 Crisis Helpline: <a href="tel:9152987821" className="text-purple-600 hover:text-purple-500">9152987821</a></p>
              <p className="text-gray-600">Visit Website: <a href="https://www.thelivelovelaughfoundation.org/find-help/helplines" className="text-purple-600 hover:text-purple-500">LIVE.LOVE.LAUGH</a></p>
            </div>
            <p className="text-lg">Made with ☕️ + Garima</p>
            <p className="text-sm mt-2">© 2025 MindWelth. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
