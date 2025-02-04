import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    // Prepend a mental health-related context to the question
    const mentalHealthContext = "You are an AI assistant trained to provide mental health support and guidance. Only provide responses related to mental health, distress, and emotional well-being and try making the user happy, understand their emotion.`Analyse the user's input and give suggestions or talk with them and provide an answer in paragraphs with spaces between paragraphs and points. Respond as if you are talking to the user in the first person, not the third person. Also don't give them generic answers";
    const prompt = `${mentalHealthContext} User's question: "${currentQuestion}"`;

    // Add user question to chat history
    setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });

      const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
    } catch (error) {
      console.log(error);
      setChatHistory(prev => [...prev, { type: 'answer', content: "Sorry - Something went wrong. Please try again!" }]);
    }
    setGeneratingAnswer(false);
  }

  return (
    <Layout>
      <div className="min-h-screen bg-purple-50 flex flex-col">


        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-purple-900 mb-8">Healing Hub - Your Safe Space</h1>

            {/* Chat Section */}
            <div className="bg-purple-50 rounded-lg p-6 mb-8">
             
              <div
                className="chat-history h-80 overflow-y-auto p-4 border border-gray-200 rounded-lg mb-4"
                ref={chatContainerRef}
              >
                {chatHistory.map((item, index) => (
                  <div key={index} className={item.type === 'question' ? 'text-right' : 'text-left'}>
                    <div
                      className={`inline-block max-w-xs p-3 rounded-lg ${
                        item.type === 'question' ? 'bg-purple-200' : 'bg-purple-300'
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
                {/* Show thinking... when generating AI response */}
                {generatingAnswer && (
                  <div className="text-center mt-4">
                    <span className="text-purple-600">Thinking...</span>
                  </div>
                )}
              </div>

              <form onSubmit={generateAnswer} className="flex space-x-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask your question..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  disabled={generatingAnswer}
                >
                  {generatingAnswer ? 'Thinking...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </main>

        
      </div>
    </Layout>
  );
}

export default App;
