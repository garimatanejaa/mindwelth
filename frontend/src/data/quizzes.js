export const quizzes = [
    {

        id: 'personality',
        title: "What's Your Personality?",
        description: 'Discover your personality type with this comprehensive quiz',
        image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&q=80&w=800',
        questions: [
          {
            id: 1,
            text: 'How do you typically spend your free time?',
            options: [
              { text: 'Reading/Solo activities', score: 1 },
              { text: 'Socializing with friends', score: 4 },
              { text: 'Mix of both', score: 2 },
              { text: 'Trying new experiences', score: 3 }
            ]
          },
          {
            id: 2,
            text: 'In group settings, you usually:',
            options: [
              { text: 'Listen more than speak', score: 1 },
              { text: 'Lead the conversation', score: 4 },
              { text: 'Participate equally', score: 2 },
              { text: 'Depends on the topic', score: 3 }
            ]
          },
          {
            id: 3,
            text: 'How do you make important decisions?',
            options: [
              { text: 'Logic and analysis', score: 2 },
              { text: 'Gut feeling', score: 3 },
              { text: 'Consult others', score: 4 },
              { text: 'Consider all angles', score: 1 }
            ]
          },
          {
            id: 4,
            text: 'I make friends easily.',
            options: [
              { text: 'Strongly agree', score: 4 },
              { text: 'Somewhat agree', score: 3 },
              { text: 'Somewhat disagree', score: 2 },
              { text: 'Strongly disagree', score: 1 }
            ]
          },
          {
            id: 5,
            text: 'I love meeting new people.',
            options: [
              { text: 'Strongly agree', score: 4 },
              { text: 'Somewhat agree', score: 3 },
              { text: 'Somewhat disagree', score: 2 },
              { text: 'Strongly disagree', score: 1 }
            ]
          },
          {
            id: 6,
            text: 'How do you handle stress?',
            options: [
              { text: 'Stay calm and rational', score: 2 },
              { text: 'Get emotional but recover quickly', score: 3 },
              { text: 'Feel overwhelmed but push through', score: 1 },
              { text: 'Take action and solve it head-on', score: 4 }
            ]
          },
          {
            id: 7,
            text: 'When facing a problem, your first instinct is to:',
            options: [
              { text: 'Analyze it logically', score: 2 },
              { text: 'Seek advice from others', score: 4 },
              { text: 'Trust my intuition', score: 3 },
              { text: 'Try different solutions quickly', score: 1 }
            ]
          },
          {
            id: 8,
            text: 'Do you enjoy trying new things?',
            options: [
              { text: 'Absolutely, I love change', score: 4 },
              { text: "Sometimes, if it's interesting", score: 3 },
              { text: 'I prefer familiarity', score: 2 },
              { text: 'No, change makes me uncomfortable', score: 1 }
            ]
          },
          {
            id: 9,
            text: 'How do you recharge after a long day?',
            options: [
              { text: 'Alone, in a quiet space', score: 1 },
              { text: 'With close friends or family', score: 4 },
              { text: 'Engaging in a hobby', score: 2 },
              { text: 'Watching TV or playing games', score: 3 }
            ]
          },
          {
            id: 10,
            text: 'How do you respond to criticism?',
            options: [
              { text: 'Take it constructively and improve', score: 4 },
              { text: 'Get defensive but later reflect on it', score: 2 },
              { text: "Ignore it if I don't agree", score: 1 },
              { text: 'Discuss and understand the perspective', score: 3 }
            ]
          },
          {
            id: 11,
            text: 'What best describes your work style?',
            options: [
              { text: 'Organized and structured', score: 2 },
              { text: 'Creative and spontaneous', score: 3 },
              { text: 'Fast-paced and multitasking', score: 4 },
              { text: 'Detail-oriented and thorough', score: 1 }
            ]
          },
          {
            id: 12,
            text: 'If a friend cancels plans last minute, how do you react?',
            options: [
              { text: 'No problem, I understand', score: 3 },
              { text: 'Slightly disappointed but okay', score: 2 },
              { text: 'Annoyed, but I let it go', score: 1 },
              { text: 'Make alternative plans quickly', score: 4 }
            ]
          },
          {
            id: 13,
            text: 'Do you prefer working in a team or alone?',
            options: [
              { text: 'Always in a team', score: 4 },
              { text: 'Mostly in a team but sometimes alone', score: 3 },
              { text: 'Mostly alone but sometimes in a team', score: 2 },
              { text: 'Always alone', score: 1 }
            ]
          },
          {
            id: 14,
            text: 'What motivates you the most?',
            options: [
              { text: 'Achieving personal goals', score: 2 },
              { text: 'Recognition from others', score: 4 },
              { text: 'Helping and inspiring people', score: 3 },
              { text: 'Learning new things', score: 1 }
            ]
          },
          {
            id: 15,
            text: "When you're in a social setting, do you:",
            options: [
              { text: 'Love being the center of attention', score: 4 },
              { text: 'Enjoy engaging conversations', score: 3 },
              { text: 'Stay quiet and observe', score: 1 },
              { text: 'Interact with a select few', score: 2 }
            ]
          },
          {
            id: 16,
            text: 'When making plans, do you:',
            options: [
              { text: 'Plan everything in advance', score: 1 },
              { text: 'Have a general plan but leave room for flexibility', score: 2 },
              { text: 'Go with the flow', score: 3 },
              { text: 'Decide at the last minute', score: 4 }
            ]
          },
          {
            id: 17,
            text: 'How do you handle conflicts?',
            options: [
              { text: 'Address them directly and resolve quickly', score: 4 },
              { text: 'Avoid confrontation but talk about it later', score: 2 },
              { text: 'Keep quiet and suppress feelings', score: 1 },
              { text: 'Try to mediate and keep the peace', score: 3 }
            ]
          },
          {
            id: 18,
            text: 'What kind of conversations do you enjoy the most?',
            options: [
              { text: 'Deep, meaningful discussions', score: 3 },
              { text: 'Casual, fun talks', score: 4 },
              { text: 'Problem-solving or intellectual debates', score: 2 },
              { text: 'Quiet, one-on-one chats', score: 1 }
            ]
          },
          {
            id: 19,
            text: 'You find yourself happiest when:',
            options: [
              { text: 'Achieving personal success', score: 3 },
              { text: 'Spending time with loved ones', score: 4 },
              { text: 'Exploring new experiences', score: 2 },
              { text: 'Having time for self-reflection', score: 1 }
            ]
          }
        ],
        getResult: (score) => {
          // Maximum possible score: 19 questions × 4 points = 76
          // Minimum possible score: 19 questions × 1 point = 19
          // Range: 57 points (76 - 19)
          
          if (score <= 30) {
            return 'Introspective Analyst'
            
          }
          if (score <= 45) {
            return 'Balanced Mediator'
              
            
          }
          if (score <= 60) {
            return 'Social Connector'
             
            
          }
          return 'Dynamic Leader'
           
          
        }
},
    {
        id: 'autism',
        title: 'Autism Awareness Quiz',
        description: 'Learn more about autism spectrum traits',
        image: 'https://images.unsplash.com/photo-1495900593237-22dc861b231d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        questions: [
          {
            id: 1,
            text: 'I like to do things the same way.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 2,
            text: 'I would rather hang out alone than go to a party with friends.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 3,
            text: "I tend to notice small details that others don't.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 4,
            text: "When I'm reading a story, I have a hard time imagining what the characters might look like or figuring out the characters' intentions.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 5,
            text: 'I find myself drawn more strongly to people than to things or solitary activities.',
            options: [
              { text: 'Always', score: 0 },
              { text: 'Most of the time', score: 1 },
              { text: 'Some of the time', score: 2 },
              { text: 'Never', score: 3 }
            ]
          },
          {
            id: 6,
            text: 'I enjoy social gatherings and/or find social situations easy.',
            options: [
              { text: 'Always', score: 0 },
              { text: 'Most of the time', score: 1 },
              { text: 'Some of the time', score: 2 },
              { text: 'Never', score: 3 }
            ]
          },
          {
            id: 7,
            text: "On many occasions, I've been told that what I've said is impolite, even though I think it is polite.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 8,
            text: 'I frequently find it hard to keep a conversation going.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 9,
            text: 'I find it difficult to imagine what it would be like to be someone else.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 10,
            text: 'I focus more on the whole picture rather than the small details.',
            options: [
              { text: 'Always', score: 0 },
              { text: 'Most of the time', score: 1 },
              { text: 'Some of the time', score: 2 },
              { text: 'Never', score: 3 }
            ]
          },
          {
            id: 11,
            text: "I tend to have very strong interests and get upset if I can't pursue them.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 12,
            text: 'When someone is talking to me, I find it easy to "read between the lines".',
            options: [
              { text: 'Always', score: 0 },
              { text: 'Most of the time', score: 1 },
              { text: 'Some of the time', score: 2 },
              { text: 'Never', score: 3 }
            ]
          },
          {
            id: 13,
            text: 'I find it easy to understand what someone is thinking or feeling just by looking at their face.',
            options: [
              { text: 'Always', score: 0 },
              { text: 'Most of the time', score: 1 },
              { text: 'Some of the time', score: 2 },
              { text: 'Never', score: 3 }
            ]
          },
          {
            id: 14,
            text: "I often notice small sounds when others don't.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 15,
            text: 'Numbers, dates, or strings of information fascinate me.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 16,
            text: 'I can easily recognize patterns in things all the time.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 17,
            text: 'New situations make me anxious and nervous.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 18,
            text: 'I prefer reading books about non-fiction subjects like dinosaurs.',
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          },
          {
            id: 19,
            text: "I find it hard to figure out people's intentions.",
            options: [
              { text: 'Never', score: 0 },
              { text: 'Some of the time', score: 1 },
              { text: 'Most of the time', score: 2 },
              { text: 'Always', score: 3 }
            ]
          }
        ],
        getResult: (score) => {
          if (score <= 15) {
            return 'Few traits present. Your responses indicate few characteristics commonly associated with autism spectrum traits.';
          }
          if (score <= 30) {
             return  'Some traits present. Your responses indicate some characteristics that are sometimes associated with autism spectrum traits.';
          }
          return 'Notable traits present. Your responses indicate several characteristics commonly associated with autism spectrum traits.';
        }
    
},
{
    id: 'adhd',
    title: 'ADHD Awareness Quiz',
    description: 'Understand ADHD traits and tendencies',
    image: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    questions: [
        { id: 1, text: 'How often do you have trouble focusing on tasks?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 2, text: 'How often do you feel restless or fidgety?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 3, text: 'How often do you procrastinate on important tasks?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 4, text: 'Do you frequently forget where you placed things?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 5, text: 'How often do you feel overwhelmed by your to-do list?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 6, text: 'How often do you struggle to complete tasks you start?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 7, text: 'Do you frequently lose track of time when working on something?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 8, text: 'How often do you interrupt others while they are speaking?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 9, text: 'Do you find it difficult to sit still for long periods?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 10, text: 'How often do you struggle with following instructions?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 11, text: 'Do you frequently daydream or zone out?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 12, text: 'Do you find it hard to stay organized?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]},
        { id: 13, text: 'Do you often switch from one activity to another without finishing them?', options: [
            { text: 'Very often', score: 3 },
            { text: 'Sometimes', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Never', score: 0 }
        ]}
    ],
    getResult: (score) => score >= 20 ? 'ADHD traits present' : score >= 10 ? 'Some ADHD traits' : 'Few ADHD traits',
    },
    {
        id: 'burnout',
        title: 'Burnout Test: Am I Burned Out?',
        description: 'Assess your stress and burnout levels.',
        image: 'https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fDB8fHx8fA%3D%3D',
        questions: [
            { id: 1, text: 'I seem to grow more cynical all the time.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 2, text: 'I could sleep ten hours a night and it still wouldn’t feel like enough.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 3, text: 'I am compensated appropriately for the work I do and the stress it causes me.', options: [
                { text: 'Strongly agree', score: 0 },
                { text: 'Somewhat agree', score: 1 },
                { text: 'Somewhat disagree', score: 2 },
                { text: 'Strongly disagree', score: 3 }
            ]},
            { id: 4, text: 'I feel like I am losing my creativity.', options: [
                { text: 'Very often', score: 3 },
                { text: 'Sometimes', score: 2 },
                { text: 'Rarely', score: 1 },
                { text: 'Never', score: 0 }
            ]},
            { id: 5, text: 'I have a heavy workload.', options: [
                { text: 'Very often', score: 3 },
                { text: 'Sometimes', score: 2 },
                { text: 'Rarely', score: 1 },
                { text: 'Never', score: 0 }
            ]},
            { id: 6, text: 'I have a great work/life balance.', options: [
                { text: 'Strongly agree', score: 0 },
                { text: 'Somewhat agree', score: 1 },
                { text: 'Somewhat disagree', score: 2 },
                { text: 'Strongly disagree', score: 3 }
            ]},
            { id: 7, text: 'My work is simple and doesn’t require much emotional energy from me.', options: [
                { text: 'Strongly agree', score: 0 },
                { text: 'Somewhat agree', score: 1 },
                { text: 'Somewhat disagree', score: 2 },
                { text: 'Strongly disagree', score: 3 }
            ]},
            { id: 8, text: 'My work is so simple, I find it demoralizing.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 9, text: 'I have a positive relationship with my colleagues.', options: [
                { text: 'Strongly agree', score: 0 },
                { text: 'Somewhat agree', score: 1 },
                { text: 'Somewhat disagree', score: 2 },
                { text: 'Strongly disagree', score: 3 }
            ]},
            { id: 10, text: 'The work I do is futile.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 11, text: 'I feel discriminated against in the workplace.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 12, text: 'Outside of the workplace, I feel swamped by life’s demands.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 13, text: 'I feel constantly overwhelmed.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 14, text: 'Honestly, I can’t be bothered to give 100% anymore.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 15, text: 'I dread going to work.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 16, text: 'I feel like I’m just putting out little fires all day rather than getting anything done.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 17, text: 'If a friend came to me with a problem, I would struggle to find the energy to help them.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 18, text: 'I daydream about quitting my job.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]},
            { id: 19, text: 'I’ve experienced physical symptoms that are uncommon for me, such as headaches or fatigue.', options: [
                { text: 'Strongly agree', score: 3 },
                { text: 'Somewhat agree', score: 2 },
                { text: 'Somewhat disagree', score: 1 },
                { text: 'Strongly disagree', score: 0 }
            ]}
        ],
        getResult: (score) => {
            if (score <= 15) return 'Minimal signs of burnout. You seem to be managing stress well.';
            if (score <= 30) return 'Moderate burnout risk. You may be experiencing some stress and fatigue.';
            if (score <= 45) return 'High burnout risk. Your responses indicate significant stress and potential burnout.';
            return 'Severe burnout risk. You may be experiencing extreme burnout symptoms. Consider seeking support.';
        } 
},
{
    id: 'temperament',
    title: 'What is My Temperament?',
    description: 'Understand your emotional and social tendencies.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    questions: [
        { id: 1, text: 'You feel strong emotions.', options: [
            { text: 'I have occasional highs and lows, but for the most part, I’m fairly steady.', score: 1 },
            { text: 'I’m not a highly emotional person.', score: 0 },
            { text: 'Everything I feel is strong.', score: 3 },
            { text: 'I tend to suppress my emotions.', score: 2 }
        ]},
        { id: 2, text: 'I describe myself as …', options: [
            { text: 'Strongly extroverted', score: 4 },
            { text: 'Somewhat extroverted', score: 3 },
            { text: 'Somewhat introverted', score: 2 },
            { text: 'Strongly introverted', score: 1 }
        ]},
        { id: 3, text: 'I make friends easily.', options: [
            { text: 'Strongly agree', score: 4 },
            { text: 'Somewhat agree', score: 3 },
            { text: 'Somewhat disagree', score: 2 },
            { text: 'Strongly disagree', score: 1 }
        ]},
        { id: 4, text: 'I love meeting new people.', options: [
            { text: 'Strongly agree', score: 4 },
            { text: 'Somewhat agree', score: 3 },
            { text: 'Somewhat disagree', score: 2 },
            { text: 'Strongly disagree', score: 1 }
        ]},
        { id: 5, text: 'My people skills aren’t the best.', options: [
            { text: 'Strongly agree', score: 1 },
            { text: 'Somewhat agree', score: 2 },
            { text: 'Somewhat disagree', score: 3 },
            { text: 'Strongly disagree', score: 4 }
        ]},
        { id: 6, text: 'Sometimes, but I tend to stick to my inner circle and not branch out.', options: [
            { text: 'Strongly agree', score: 3 },
            { text: 'Somewhat agree', score: 2 },
            { text: 'Somewhat disagree', score: 1 },
            { text: 'Strongly disagree', score: 0 }
        ]},
        { id: 7, text: 'I’m the person who shows up with soup when someone is sick.', options: [
            { text: 'Strongly agree', score: 4 },
            { text: 'Somewhat agree', score: 3 },
            { text: 'Somewhat disagree', score: 2 },
            { text: 'Strongly disagree', score: 1 }
        ]},
        { id: 8, text: 'When it comes to pleasing others …', options: [
            { text: 'I want everyone around me to feel as happy as I do.', score: 4 },
            { text: 'I don’t do it.', score: 3 },
            { text: 'The hardest person to please is myself.', score: 2 },
            { text: 'It can sometimes feel like servitude.', score: 1 }
        ]},
    ],
    getResult: (score) => {
        if (score <= 20) return 'Calm and balanced';
        if (score <= 40) return 'Emotionally intense';
        return 'Overwhelmingly emotional';
    }
   },
    {
        id: 'anxiety',
title: 'Anxiety Test',
description: 'Assess your anxiety levels based on common symptoms.',
image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800',
questions: [
    { id: 1, text: 'Pounding heart', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 2, text: 'Sweating', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 3, text: 'Trembling or shaking', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 4, text: 'Shortness of breath', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 5, text: 'Afraid or scared', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 6, text: 'Chest pain or discomfort', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 7, text: 'Nausea or abdominal stress', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 8, text: 'Feeling dizzy or unsteady', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 9, text: 'Fear of losing control or "going crazy"', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 10, text: 'Numbness or tingling sensations', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 11, text: 'Chills or hot flashes', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 12, text: 'Fear of dying', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 13, text: 'Constant or persistent worry', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 14, text: 'Feeling of choking', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 15, text: 'Unable to relax', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 16, text: 'Feeling of being unreal', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 17, text: 'Nervous', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 18, text: 'Feeling shaky or wobbly', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]},
    { id: 19, text: 'Irritability or difficulty sleeping', options: [
        { text: 'Not at all', score: 0 },
        { text: 'Just a little', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Usually', score: 4 }
    ]}
],
getResult: (score) => 
    score <= 10 ? 'Minimal anxiety signs' :
    score <= 30 ? 'Moderate anxiety' :
    'Severe anxiety symptoms'
  },{
    id: 'therapy',
    title: 'Do I Need Therapy?',
    description: 'Assess whether therapy might be helpful for you.',
    image: 'https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    questions: [
        { id: 1, text: 'I’m concerned about a behavior, feeling, or something I’m doing.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 2, text: 'This behavior or feeling has been getting worse in the past few weeks.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 3, text: 'I’ve tried to stop or reduce this behavior or feeling on my own.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 4, text: 'My attempts at stopping or reducing this behavior or feeling have been successful.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 5, text: 'I rely on my friends or family to help me with my current troubles.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 6, text: 'I’m finding it more difficult to cope with things than usual.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 7, text: 'I’m having trouble concentrating at work or school.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 8, text: 'I like to think things through or talk about things that bother me.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
        { id: 9, text: 'I’ve talked to my friends or family about the behavior or feeling that’s troubling me.', options: ['Yes', 'No'] },
        { id: 10, text: 'I’ve read books or gone on the internet to discover more about the behavior or feeling that’s troubling me.', options: ['Yes', 'No'] },
        { id: 11, text: 'I’ve been in therapy before and it has helped me.', options: ['Not at all', 'Just a little', 'Somewhat', 'Moderately', 'Quite a lot', 'Very much'] },
    ],
    getResult: (score) => {
        if (score >= 20 && score <= 41) {
            return {
                message: "You scored within the 20-41 range.",
                description: "Scoring in this range suggests that you might benefit from psychotherapy. Keep in mind that this quiz represents this moment in time and will likely change as you experience new life events and challenges. If you’re concerned, talking things over with a mental health professional can help you with the behaviors and feelings you're experiencing. A mental health professional can offer a safe space for you to talk openly and honestly about any topic that’s concerning for you. Anyone can benefit from therapy. A mental health diagnosis is not required to begin your therapy journey."
            };
        } else if (score >= 42 && score <= 60) {
            return {
                message: "You scored within the 42-60 range.",
                description: "Scoring in this range suggests that you might be experiencing significant distress or difficulty in managing your thoughts, emotions, or behaviors. Seeking therapy could provide you with support, coping strategies, and guidance tailored to your needs. Therapy isn’t just for crises—it can be a proactive tool for improving your well-being."
            };
        } else if (score >= 61) {
            return {
                message: "You scored 61 or above.",
                description: "A high score suggests that your challenges are significantly impacting your daily life, relationships, or overall well-being. It might be beneficial to speak with a therapist or mental health professional. Remember, seeking help is a sign of strength, and therapy can provide valuable insights and tools to help you navigate your concerns."
            };
        } else {
            return {
                message: "Your score is below 20.",
                description: "Based on your responses, you may not be currently experiencing significant distress. However, if you ever feel overwhelmed or uncertain about your emotions, therapy is always an option for self-growth and support."
            };
        }
    }
},{
    id: 'therapy',
    title: 'Do I Need Therapy?',
    description: 'Assess whether therapy might be helpful for you.',
    image: 'https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    questions: [
        { id: 1, text: 'I’m concerned about a behavior, feeling, or something I’m doing.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 2, text: 'This behavior or feeling has been getting worse in the past few weeks.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 3, text: 'I’ve tried to stop or reduce this behavior or feeling on my own.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 4, text: 'My attempts at stopping or reducing this behavior or feeling have been successful.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 5, text: 'I rely on my friends or family to help me with my current troubles.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 6, text: 'I’m finding it more difficult to cope with things than usual.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 7, text: 'I’m having trouble concentrating at work or school.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 8, text: 'I like to think things through or talk about things that bother me.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
        { id: 9, text: 'I’ve talked to my friends or family about the behavior or feeling that’s troubling me.', options: [{ text: 'Yes', score: 2 }, { text: 'No', score: 0 }] },
        { id: 10, text: 'I’ve read books or gone on the internet to discover more about the behavior or feeling that’s troubling me.', options: [{ text: 'Yes', score: 2 }, { text: 'No', score: 0 }] },
        { id: 11, text: 'I’ve been in therapy before and it has helped me.', options: [{ text: 'Not at all', score: 0 }, { text: 'Just a little', score: 1 }, { text: 'Somewhat', score: 2 }, { text: 'Moderately', score: 3 }, { text: 'Quite a lot', score: 4 }, { text: 'Very much', score: 5 }] },
    ],
    getResult: (score) => {
        if (score >= 20 && score <= 41) {
            return  "Scoring in this range suggests that you might benefit from psychotherapy. Keep in mind that this quiz represents this moment in time and will likely change as you experience new life events and challenges. If you’re concerned, talking things over with a mental health professional can help you with the behaviors and feelings you're experiencing. A mental health professional can offer a safe space for you to talk openly and honestly about any topic that’s concerning for you. Anyone can benefit from therapy. A mental health diagnosis is not required to begin your therapy journey."
            
        } else if (score >= 42 && score <= 60) {
            return "Scoring in this range suggests that you might be experiencing significant distress or difficulty in managing your thoughts, emotions, or behaviors. Seeking therapy could provide you with support, coping strategies, and guidance tailored to your needs. Therapy isn’t just for crises—it can be a proactive tool for improving your well-being."
            
        } else if (score >= 61) {
            return  "A high score suggests that your challenges are significantly impacting your daily life, relationships, or overall well-being. It might be beneficial to speak with a therapist or mental health professional. Remember, seeking help is a sign of strength, and therapy can provide valuable insights and tools to help you navigate your concerns."
           
        } else {
            return  "Based on your responses, you may not be currently experiencing significant distress. However, if you ever feel overwhelmed or uncertain about your emotions, therapy is always an option for self-growth and support."
            
        }
    }
},
{
    id: 'sleep-chronotype',
title: 'What Is My Sleep Chronotype?',
description: 'This quiz helps you identify your sleep chronotype.',
image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
questions: [
    { id: 1, text: 'At times, I feel so energetic that I can function on little to no sleep', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 2, text: 'I have difficulty following through on some of my plans and projects, even though I was very excited about them when I got started.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 3, text: 'People have told me they\'re having trouble keeping up with what I am saying.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 4, text: 'At times, I feel really down about myself, questioning my own worth.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 5, text: 'I go through periods of time where my sexual drive greatly increases.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 6, text: 'I have contemplated ending my own life.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 7, text: 'I have felt so irritable that I have gotten into arguments with other people pretty quickly.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 8, text: 'Other people don’t always match my enthusiasm.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 9, text: 'There are days when I feel like I can’t get out of bed.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 10, text: 'Sometimes I feel much more social, outgoing, and charming.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 11, text: 'I periodically do things that carry some risk to them (e.g., using alcohol or drugs, gambling, unsafe sexual activity, thrill-seeking activities).', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 12, text: 'I have noticed that the windows of time where I feel amazing are typically followed by feeling awful.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]},
    { id: 13, text: 'Sometimes I am very productive, and at other times I can’t seem to get anything done.', options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 1 },
        { text: 'Often for several days at a time', score: 2 }
    ]}
],
    getResult: (score) => {
        if (score >= 0 && score <= 5) {
            return "TYou may be a Bear. The Bear chronotype is the most common. Your sleep and wake cycle aligns with the sun's rising and setting, meaning you're more alert during the day and prefer to sleep at night."
            
        } else if (score >= 6 && score <= 15) {
            return "You may be a Lion. Lions prefer to wake up early and wind down early, often falling asleep around 9 or 10 p.m. You may feel energetic and productive in the morning."
            
        } else if (score >= 16 && score <= 23) {
            return  "You may be a Wolf. Wolves tend to have trouble waking up in the morning and feel more energetic in the afternoon and evening. You might also feel a second energy boost around 6 p.m."
        } else if (score >= 24 && score <= 30) {
            return  "You may be a Dolphin. Dolphins often have trouble maintaining a consistent sleep schedule and may be sensitive to noise. You're usually most productive in the late morning and early afternoon."
            
        } else {
            return  "You may fall somewhere in between these types. Understanding your sleep habits and cycles may help you identify your most natural sleep pattern."
            
        }
    }

},


];
