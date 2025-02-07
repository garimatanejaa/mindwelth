// Layout.jsx
import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
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
      <main>{children}</main>

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
};

export default Layout;
