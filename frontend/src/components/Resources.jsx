import React, { useState } from 'react';
import Layout from './Layout';
import { 
  HeartPulse, 
  PhoneCall, 
  BookOpen, 
  Brain, 
 
  Shield, 
  Headphones,
  Gamepad2,
  BookOpenIcon,
  Smartphone,
  Info
} from 'lucide-react';

export function Resources() {
  const [activeGame, setActiveGame] = useState(null);

  const mentalHealthSections = [
    {
      icon: Shield,
      title: "Holistic Wellness",
      content: "Embrace mental health through integrated Indian wellness practices combining physical, mental, and spiritual well-being."
    },
    {
      icon: Brain,
      title: "Understanding Mental Health",
      content: "Mental wellness is a dynamic state of emotional, psychological, and social balance, deeply rooted in individual and cultural contexts."
    }
  ];

  const helplines = [
    { name: "AASRA", number: "91-9820466726", focus: "24/7 Suicide Prevention" },
    { name: "Vandrevala Foundation", number: "9999-666-555", focus: "Mental Health Support" }
  ];

  const selfCareResources = [
    "Yoga and meditation",
    "Ayurvedic stress management",
    "Mindful breathing techniques",
    "Traditional music therapy"
  ];

  const relaxationGames = [
    {
      name: "Calm Waters",
      url: "https://rainymood.com/",
      description: "Immersive sound and visual relaxation experience"
    },
    {
      name: "Jig-Saw Puzzle",
      url: "https://onlinejigsawpuzzles.net/puzzle.php?image=images/puzzle/Zen-garden-with-meticulously-raked-gravel.jpg",
      description: "These high-quality online jigsaw puzzles are relaxing and fun for adults and kids alike, whether you’re bored or looking to distract your mind"
    },
    {
        name: "Pixel Thoughts",
        url: "https://pixelthoughts.co/",
        description: "Meditation tool that helps reduce stress in 60 seconds"
      },
      {
        name: "Incredibox",
        url: "https://www.incredibox.com/demo/v7/",
        description: "Creative music-making game for stress relief"
      },
      {
        name: "Sand Pond",
        url: "https://sandpond.app/",
        description: "Minimalist interactive sand animation experience"
      },
      {
        name: "Calm.com Breathing Bubble",
        url: "https://www.calm.com/breathe",
        description: "Guided breathing exercise for instant relaxation"
      },
      {
        name: "Mr. Doob's Line Rider",
        url: "https://www.linerides.com/",
        description: "Creative drawing and physics-based relaxation game"
      },
      {
        name: "Silk - Interactive Generative Art",
        url: "http://weavesilk.com/",
        description: "Mesmerizing digital art creation experience"
      }
  ];

  return (
    <Layout>
      <div className="bg-purple-50 min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Mental Wellness Resources
            </h1>
            <p className="text-xl text-purple-600">
              Compassionate support for your mental health journey
            </p>
          </header>
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
          <section className="mb-16">
        <div className="flex items-center justify-start mb-4">
          <BookOpenIcon className="h-8 w-8 text-purple-600 mr-4" />
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
      <section className="mb-16">
        <div className="flex items-center justify-start mb-4">
          <Smartphone className="h-8 w-8 text-purple-600 mr-4" />
          <h2 className="text-3xl font-semibold text-purple-900">Mental Health Apps</h2>
        </div>
        <p className="text-lg text-gray-700">
          These apps can assist with meditation, stress management, and overall mental wellbeing.
        </p>
        <ul className="list-disc pl-8 mt-4">
          <li className="text-lg text-gray-700">
            <a href="https://www.headspace.com/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Headspace</a> - Guided meditation and mindfulness techniques.
          </li>
          <li className="text-lg text-gray-700">
            <a href="https://www.calm.com/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Calm</a> - Sleep, meditation, and relaxation tools.
          </li>
          <li className="text-lg text-gray-700">
            <a href="https://www.moodfitapp.com/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Moodfit</a> - Mood tracking and mental fitness app.
          </li>
          <li className="text-lg text-gray-700">
            <a href="https://www.sanvello.com/" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Sanvello</a> - Cognitive Behavioral Therapy (CBT) based tools for anxiety and depression.
          </li>
        </ul>
      </section>
          <section className="bg-purple-100 rounded-xl p-8 mb-12 shadow-md">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">
                Crisis Support
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {helplines.map((helpline, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <PhoneCall className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{helpline.name}</h3>
                  <p className="text-purple-600 mb-2">{helpline.focus}</p>
                  <a href={`tel:${helpline.number}`} className="text-lg font-semibold text-purple-700">
                    {helpline.number}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {mentalHealthSections.map((section, index) => (
                <div key={index} className="bg-purple-100 p-6 rounded-xl shadow-md">
                  <section.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">{section.title}</h3>
                  <p className="text-purple-700">{section.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-purple-100 rounded-xl p-8 mb-12 shadow-md">
            <div className="flex items-center mb-6">
              <HeartPulse className="w-8 h-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Self-Care Practices</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 text-purple-700">
              {selfCareResources.map((resource, index) => (
                <li key={index} className="flex items-center">
                  
                  {resource}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-purple-100 rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <Gamepad2 className="w-8 h-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-semibold text-purple-900">Digital Relaxation Experiences</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {relaxationGames.map((game, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">{game.name}</h3>
                  <p className="text-purple-600 mb-4">{game.description}</p>
                  <button onClick={() => setActiveGame(game.url)} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
                    Launch Game
                  </button>
                </div>
              ))}
            </div>

            {activeGame && (
              <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-purple-700 mb-4">Active Game</h4>
                <div className="w-full h-[500px] border-2 border-purple-200 rounded-lg overflow-hidden">
                  <iframe src={activeGame} width="100%" height="100%" className="border-none" title="Relaxation Game" />
                </div>
                <button onClick={() => setActiveGame(null)} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
                  Close Game
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Resources;