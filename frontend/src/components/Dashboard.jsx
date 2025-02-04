import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: 'Mood Logs', href: '/notes' },
    { name: 'Quizzes', href: '/quizzes' },
    { name: 'AI Therapist', href: '/therapist' },
    { name: 'Resources', href: '/resources' }
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
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Mental Health Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Mood Check */}
            <div className="bg-purple-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">Quick Mood Check</h2>
              <p className="text-purple-700">How are you feeling today?</p>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-blue-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Upcoming Sessions</h2>
              <p className="text-blue-700">No upcoming sessions scheduled</p>
            </div>

            {/* Resources */}
            <div className="bg-green-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-900 mb-4">Quick Resources</h2>
              <p className="text-green-700">Access helpful materials and guides</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600">No recent activity to display</p>
            </div>
          </div>
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
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
