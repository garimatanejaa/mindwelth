import React from 'react';
import Layout from './Layout'; 
import { BookOpen, Heart, Info, LifeBuoy } from 'lucide-react'; 

export function Resources() {
  return (
    <Layout>
      <div className="bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900">Mental Health Resources</h1>
            <p className="mt-4 text-xl text-purple-600">
              Explore helpful resources to support your mental health journey.
            </p>
          </div>

          {/* Mental Health Information */}
          <section className="mb-16">
            <div className="flex items-center justify-start mb-4">
              <Info className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Understanding Mental Health</h2>
            </div>
            <p className="text-lg text-gray-700">
              Mental health is just as important as physical health. It's essential to prioritize mental wellness and seek help when needed. This section covers various mental health conditions, their symptoms, and treatment options.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Many people face challenges with mental health, whether it's stress, anxiety, depression, or more serious conditions like bipolar disorder or schizophrenia. It's crucial to understand that you're not alone, and help is available.
            </p>
          </section>

          {/* Crisis Helplines */}
          <section className="bg-purple-100 py-8 rounded-lg mb-16">
            <div className="flex items-center justify-start mb-4">
              <LifeBuoy className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Crisis Helplines</h2>
            </div>
            <p className="text-lg text-gray-700">
              If you're experiencing a mental health crisis or need someone to talk to, these helplines are available 24/7:
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li className="text-lg text-gray-700">National Suicide Prevention Lifeline: <a href="tel:988" className="text-purple-600">988</a></li>
              <li className="text-lg text-gray-700">Crisis Text Line: Text "HELLO" to <span className="text-purple-600">741741</span></li>
              <li className="text-lg text-gray-700">SAMHSA National Helpline: <a href="tel:1-800-662-HELP" className="text-purple-600">1-800-662-HELP</a></li>
            </ul>
          </section>

          {/* Self-Care Tips */}
          <section className="mb-16">
            <div className="flex items-center justify-start mb-4">
              <Heart className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Self-Care Tips for Mental Wellness</h2>
            </div>
            <p className="text-lg text-gray-700">
              Practicing self-care is vital to maintaining mental health. Here are some tips you can incorporate into your daily routine:
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li className="text-lg text-gray-700">Regular exercise to boost mood and energy levels</li>
              <li className="text-lg text-gray-700">Mindfulness meditation to reduce stress and anxiety</li>
              <li className="text-lg text-gray-700">Getting enough sleep to promote emotional and physical health</li>
              <li className="text-lg text-gray-700">Connecting with friends and family for support</li>
            </ul>
          </section>

          {/* Online Resources */}
          <section className="bg-purple-100 py-8 rounded-lg mb-16">
            <div className="flex items-center justify-start mb-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Online Mental Health Resources</h2>
            </div>
            <p className="text-lg text-gray-700">
              There are numerous online resources for mental health support, education, and communities to connect with:
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li className="text-lg text-gray-700">
                <a href="https://www.psychologytoday.com" className="text-purple-600">Psychology Today</a> - A directory of mental health professionals.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://www.headspace.com" className="text-purple-600">Headspace</a> - Guided meditation for mental clarity and relaxation.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://www.betterhelp.com" className="text-purple-600">BetterHelp</a> - Online therapy services for individuals and couples.
              </li>
            </ul>
          </section>

          {/* Additional Reading */}
          <section className="mb-16">
            <div className="flex items-center justify-start mb-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Books and Articles</h2>
            </div>
            <p className="text-lg text-gray-700">
              Reading books and articles on mental health can help increase your understanding and offer solutions to improve your wellbeing. Here are some highly recommended resources:
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li className="text-lg text-gray-700">
                <strong>The Power of Now</strong> by Eckhart Tolle - A guide to mindfulness and present-moment living.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Emotion Regulation</strong> by Adrian Wells - Practical techniques for managing emotional responses.
              </li>
              <li className="text-lg text-gray-700">
                <strong>When the Body Says No</strong> by Gabor Maté - Exploring the link between mind and body health.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <div className="flex items-center justify-start mb-4">
              <Info className="h-8 w-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Conclusion</h2>
            </div>
            <p className="text-lg text-gray-700">
              It's important to understand that mental health challenges are common, and seeking help is a sign of strength. By utilizing the resources provided, you can take the necessary steps to prioritize your mental wellbeing and begin your healing journey.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Always remember that there is support available, and it's okay to ask for help when you need it.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
