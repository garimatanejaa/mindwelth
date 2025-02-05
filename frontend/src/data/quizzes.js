export const quizzes = [
    {
        id: 'personality',
        title: "What's Your Personality?",
        description: 'Discover your personality type with this comprehensive quiz',
        image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&q=80&w=800',
        questions: [
            { id: 1, text: 'How do you typically spend your free time?', options: ['Reading/Solo activities', 'Socializing with friends', 'Mix of both', 'Trying new experiences'] },
            { id: 2, text: 'In group settings, you usually:', options: ['Listen more than speak', 'Lead the conversation', 'Participate equally', 'Depends on the topic'] },
            { id: 3, text: 'How do you make important decisions?', options: ['Logic and analysis', 'Gut feeling', 'Consult others', 'Consider all angles'] },
            { id: 4, text: 'I make friends easily.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 5, text: 'I love meeting new people.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 6, text: 'How do you handle stress?', options: ['Stay calm and rational', 'Get emotional but recover quickly', 'Feel overwhelmed but push through', 'Avoid stressful situations'] },
            { id: 7, text: 'When facing a problem, your first instinct is to:', options: ['Analyze it logically', 'Seek advice from others', 'Trust my intuition', 'Try different solutions quickly'] },
            { id: 8, text: 'Do you enjoy trying new things?', options: ['Absolutely, I love change', 'Sometimes, if it’s interesting', 'I prefer familiarity', 'No, change makes me uncomfortable'] },
            { id: 9, text: 'How do you recharge after a long day?', options: ['Alone, in a quiet space', 'With close friends or family', 'Engaging in a hobby', 'Watching TV or playing games'] },
            { id: 10, text: 'How do you respond to criticism?', options: ['Take it constructively and improve', 'Get defensive but later reflect on it', 'Ignore it if I don’t agree', 'Feel upset and dwell on it'] },
            { id: 11, text: 'What best describes your work style?', options: ['Organized and structured', 'Creative and spontaneous', 'Fast-paced and multitasking', 'Detail-oriented and thorough'] },
            { id: 12, text: 'If a friend cancels plans last minute, how do you react?', options: ['No problem, I understand', 'Slightly disappointed but okay', 'Annoyed, but I let it go', 'Frustrated and take it personally'] },
            { id: 13, text: 'Do you prefer working in a team or alone?', options: ['Always in a team', 'Mostly in a team but sometimes alone', 'Mostly alone but sometimes in a team', 'Always alone'] },
            { id: 14, text: 'What motivates you the most?', options: ['Achieving personal goals', 'Recognition from others', 'Helping and inspiring people', 'Learning new things'] },
            { id: 15, text: 'When you’re in a social setting, do you:', options: ['Love being the center of attention', 'Enjoy engaging conversations', 'Stay quiet and observe', 'Feel drained after too much socializing'] },
            { id: 16, text: 'When making plans, do you:', options: ['Plan everything in advance', 'Have a general plan but leave room for flexibility', 'Go with the flow', 'Decide at the last minute'] },
            { id: 17, text: 'How do you handle conflicts?', options: ['Address them directly and resolve quickly', 'Avoid confrontation but talk about it later', 'Keep quiet and suppress feelings', 'Try to mediate and keep the peace'] },
            { id: 18, text: 'What kind of conversations do you enjoy the most?', options: ['Deep, meaningful discussions', 'Casual, fun talks', 'Problem-solving or intellectual debates', 'Gossip and light-hearted chats'] },
            { id: 19, text: 'You find yourself happiest when:', options: ['Achieving personal success', 'Spending time with loved ones', 'Exploring new experiences', 'Helping others'] }
        ],
        getResult: (score) => score <= 10 ? 'Introverted Thinker' : score <= 20 ? 'Balanced Mediator' : 'Extroverted Explorer',
    },
    {
        id: 'autism',
        title: 'Autism Awareness Quiz',
        description: 'Learn more about autism spectrum traits',
        image: 'https://images.unsplash.com/photo-1495900593237-22dc861b231d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        questions: [
            { id: 1, text: 'I like to do things the same way.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 2, text: 'I would rather hang out alone than go to a party with friends.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 3, text: 'I tend to notice small details that others don’t.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 4, text: 'When I’m reading a story, I have a hard time imagining what the characters might look like or figuring out the characters’ intentions.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 5, text: 'I find myself drawn more strongly to people than to things or solitary activities (including video games).', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 6, text: 'I enjoy social gatherings and/or find social situations easy.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 7, text: 'On many occasions, I’ve been told that what I’ve said is impolite, even though I think it is polite.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 8, text: 'I frequently find it hard to keep a conversation going.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 9, text: 'I find it difficult to imagine what it would be like to be someone else.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 10, text: 'I focus more on the whole picture rather than the small details.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 11, text: 'I tend to have very strong interests and get upset if I can’t pursue them.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 12, text: 'When someone is talking to me, I find it easy to “read between the lines” (understand their true feelings or intentions).', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 13, text: 'I find it easy to understand what someone is thinking or feeling just by looking at their face.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 14, text: 'I often notice small sounds when others don’t.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 15, text: 'Numbers, dates, or strings of information fascinate me.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 16, text: 'I can easily recognize patterns in things all the time.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 17, text: 'New situations make me anxious and nervous.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 18, text: 'I prefer reading books about non-fiction subjects like dinosaurs.', options: ['Never', 'Some of the time', 'Most of the time'] },
            { id: 19, text: 'I find it hard to figure out people’s intentions.', options: ['Never', 'Some of the time', 'Most of the time'] },
        ],
        getResult: (score) => score <= 4 ? 'Consider professional consultation' : score <= 8 ? 'Some traits present' : 'Few traits present',
    },
    {
        id: 'adhd',
        title: 'ADHD Awareness Quiz',
        description: 'Understand ADHD traits and tendencies',
        image: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        questions : [
            { id: 1, text: 'How often do you have trouble focusing on tasks?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 2, text: 'How often do you feel restless or fidgety?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 3, text: 'How often do you procrastinate on important tasks?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 4, text: 'Do you frequently forget where you placed things?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 5, text: 'How often do you feel overwhelmed by your to-do list?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 6, text: 'How often do you struggle to complete tasks you start?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 7, text: 'Do you frequently lose track of time when working on something?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 8, text: 'How often do you interrupt others while they are speaking?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 9, text: 'Do you find it difficult to sit still for long periods?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 10, text: 'How often do you struggle with following instructions?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 11, text: 'Do you frequently daydream or zone out?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 12, text: 'How often do you get distracted by noises or background activity?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 13, text: 'How often do you feel impatient in slow-moving situations?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 14, text: 'Do you often find yourself talking excessively?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 15, text: 'How often do you feel like your mind is racing?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 16, text: 'How often do you act impulsively without thinking?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 17, text: 'Do you find it difficult to stay organized?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 18, text: 'How often do you feel mentally exhausted?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] },
            { id: 19, text: 'Do you struggle to prioritize tasks effectively?', options: ['Very often', 'Sometimes', 'Rarely', 'Never'] }
        ],
        
        getResult: (score) => score <= 4 ? 'Consider professional evaluation' : score <= 8 ? 'Some attention challenges present' : 'Few attention challenges present',
    },
    {
        id: 'burnout',
        title: 'Burnout Test: Am I Burned Out?',
        description: 'Assess your stress and burnout levels.',
        image: 'https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        questions : [
            { id: 1, text: 'I seem to grow more cynical all the time.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 2, text: 'I could sleep ten hours a night and it still wouldn’t feel like enough.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 3, text: 'I am compensated appropriately for the work I do and the stress it causes me.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 4, text: 'I feel like I am losing my creativity.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 5, text: 'I have a heavy workload.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 6, text: 'I have a great work/life balance.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 7, text: 'My work is simple and doesn’t require much emotional energy from me.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 8, text: 'My work is so simple, I find it demoralizing.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 9, text: 'I have a positive relationship with my colleagues.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 10, text: 'The work I do is futile.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 11, text: 'I feel discriminated against in the workplace.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 12, text: 'Outside of the workplace, I feel swamped by life’s demands.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 13, text: 'I feel constantly overwhelmed.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 14, text: 'Honestly, I can’t be bothered to give 100% anymore.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 15, text: 'I dread going to work.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 16, text: 'I feel like I’m just putting out little fires all day rather than getting anything done.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 17, text: 'If a friend came to me with a problem, I would struggle to find the energy to help them.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 18, text: 'I daydream about quitting my job.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 19, text: 'I’ve experienced physical symptoms that are uncommon for me, such as headaches or fatigue.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] }
        ],
        getResult: (score) => score <= 4 ? 'Minimal burnout signs' : score <= 8 ? 'Moderate burnout risk' : 'High burnout risk',
    },
    {
        id: 'temperament',
        title: 'What is My Temperament?',
        description: 'Understand your emotional and social tendencies.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
        questions : [
            { id: 1, text: 'You feel strong emotions.', options: ['I have occasional highs and lows, but for the most part, I’m fairly steady.', 'I’m not a highly emotional person.', 'Everything I feel is strong.', 'I tend to suppress my emotions.'] },
            { id: 2, text: 'I describe myself as …', options: ['Strongly extroverted', 'Somewhat extroverted', 'Somewhat introverted', 'Strongly introverted'] },
            { id: 3, text: 'I make friends easily.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 4, text: 'I love meeting new people.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 5, text: 'My people skills aren’t the best.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 6, text: 'Sometimes, but I tend to stick to my inner circle and not branch out.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 7, text: 'I’m the person who shows up with soup when someone is sick.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 8, text: 'When it comes to pleasing others …', options: ['I want everyone around me to feel as happy as I do.', 'I don’t do it.', 'The hardest person to please is myself.', 'It can sometimes feel like servitude.'] },
            { id: 9, text: 'I get angry easily.', options: ['I’m generally very upbeat.', 'I’m quick to anger.', 'It takes a lot to make me angry, but when I get angry, I get very angry.', 'I avoid feeling anger by keeping the peace whenever I can.'] },
            { id: 10, text: 'Professionally, I can see myself excelling as a …', options: ['Tour guide in exotic locations.', 'CEO of a major corporation.', 'Photographer.', 'Teacher.'] },
            { id: 11, text: 'If my order comes out wrong at a restaurant, I …', options: ['Don’t send it back. I’m open to trying something new!', 'Send it back immediately.', 'Send it back but feel guilty for doing it.', 'Don’t send it back. It isn’t worth the trouble.'] },
            { id: 12, text: 'I have a competitive streak.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 13, text: 'When it comes to routines …', options: ['I thrive on routines and don’t like change.', 'I enjoy spontaneity but keep some structure.', 'I struggle with routines and prefer to go with the flow.', 'I have no set routine at all.'] },
            { id: 14, text: 'I tend to notice small details that others don’t.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 15, text: 'I often notice small sounds when others don’t.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 16, text: 'Numbers, dates, or strings of information fascinate me.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 17, text: 'New situations make me anxious and nervous.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 18, text: 'I find it hard to figure out people’s intentions.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] },
            { id: 19, text: 'I enjoy social gatherings and/or find social situations easy.', options: ['Strongly agree', 'Somewhat agree', 'Somewhat disagree', 'Strongly disagree'] }
        ],
        
        getResult: (score) => score <= 4 ? 'Calm and collected' : score <= 8 ? 'Balanced' : 'Highly emotional',
    },
    {
        id: 'anxiety',
        title: 'Anxiety Test',
        description: 'Assess your anxiety levels based on common symptoms.',
        image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800',
        questions : [
            { id: 1, text: 'Pounding heart', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 2, text: 'Sweating', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 3, text: 'Trembling or shaking', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 4, text: 'Shortness of breath', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 5, text: 'Afraid or scared', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 6, text: 'Chest pain or discomfort', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 7, text: 'Nausea or abdominal stress', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 8, text: 'Feeling dizzy or unsteady', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 9, text: 'Fear of losing control or "going crazy"', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 10, text: 'Numbness or tingling sensations', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 11, text: 'Chills or hot flashes', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 12, text: 'Fear of dying', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 13, text: 'Constant or persistent worry', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 14, text: 'Feeling of choking', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 15, text: 'Unable to relax', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 16, text: 'Feeling of being unreal', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 17, text: 'Nervous', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 18, text: 'Feeling shaky or wobbly', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] },
            { id: 19, text: 'Irritability or difficulty sleeping', options: ['Not at all', 'Just a little', 'Sometimes', 'Often', 'Usually'] }
        ],
        
        getResult: (score) => score <= 5 ? 'Minimal anxiety signs' : score <= 10 ? 'Moderate anxiety' : 'Severe anxiety symptoms',
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
    id: 'bipolar-disorder',
    title: 'Do I Have Bipolar Disorder?',
    description: 'This quiz helps assess whether you may be experiencing symptoms of bipolar disorder.',
    image: 'https://plus.unsplash.com/premium_photo-1689177357836-52c9d90d3d6f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    questions: [
        { id: 1, text: 'At times, I feel so energetic that I can function on little to no sleep', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 2, text: 'I have difficulty following through on some of my plans and projects, even though I was very excited about them when I got started.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 3, text: 'People have told me they\'re having trouble keeping up with what I am saying.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 4, text: 'At times, I feel really down about myself, questioning my own worth.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 5, text: 'I go through periods of time where my sexual drive greatly increases.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 6, text: 'I have contemplated ending my own life.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 7, text: 'I have felt so irritable that I have gotten into arguments with other people pretty quickly.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 8, text: 'Other people don’t always match my enthusiasm.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 9, text: 'There are days when I feel like I can’t get out of bed.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 10, text: 'Sometimes I feel much more social, outgoing, and charming.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 11, text: 'I periodically do things that carry some risk to them (e.g., using alcohol or drugs, gambling, unsafe sexual activity, thrill-seeking activities).', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 12, text: 'I have noticed that the windows of time where I feel amazing are typically followed by feeling awful.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 13, text: 'Sometimes I am very productive, and at other times I can’t seem to get anything done.', options: ['Never', 'Occasionally', 'Often for several days at a time'] }
    ],
    getResult: (score) => {
        if (score >= 12 && score <= 20) {
            return {
                message: "You scored within the 12-20 range.",
                description: "Scoring in this range suggests that you may experience some mood fluctuations. It's worth reflecting on whether these shifts significantly impact your daily life. If you're concerned about your symptoms, speaking with a mental health professional can help provide clarity."
            };
        } else if (score >= 21 && score <= 35) {
            return {
                message: "You scored within the 21-35 range.",
                description: "Scoring in this range suggests that your symptoms may be indicative of mood instability that could be affecting your life. It might be helpful to consult a mental health professional who can provide guidance and further evaluation."
            };
        } else if (score >= 36) {
            return {
                message: "You scored 36 or above.",
                description: "A high score suggests that you may be experiencing significant mood swings that could be related to bipolar disorder. It's important to consult with a healthcare professional who can assess your symptoms and offer appropriate treatment or support."
            };
        } else {
            return {
                message: "Your score is below 12.",
                description: "Based on your responses, you may not be experiencing significant mood swings. However, if you have concerns about your mental health, it’s always a good idea to talk to a professional."
            };
        }
    }
},
{
    id: 'bipolar-disorder',
    title: 'Do I Have Bipolar Disorder?',
    description: 'This quiz helps assess whether you may be experiencing symptoms of bipolar disorder.',
    image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    questions: [
        { id: 1, text: 'At times, I feel so energetic that I can function on little to no sleep', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 2, text: 'I have difficulty following through on some of my plans and projects, even though I was very excited about them when I got started.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 3, text: 'People have told me they\'re having trouble keeping up with what I am saying.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 4, text: 'At times, I feel really down about myself, questioning my own worth.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 5, text: 'I go through periods of time where my sexual drive greatly increases.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 6, text: 'I have contemplated ending my own life.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 7, text: 'I have felt so irritable that I have gotten into arguments with other people pretty quickly.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 8, text: 'Other people don’t always match my enthusiasm.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 9, text: 'There are days when I feel like I can’t get out of bed.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 10, text: 'Sometimes I feel much more social, outgoing, and charming.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 11, text: 'I periodically do things that carry some risk to them (e.g., using alcohol or drugs, gambling, unsafe sexual activity, thrill-seeking activities).', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 12, text: 'I have noticed that the windows of time where I feel amazing are typically followed by feeling awful.', options: ['Never', 'Occasionally', 'Often for several days at a time'] },
        { id: 13, text: 'Sometimes I am very productive, and at other times I can’t seem to get anything done.', options: ['Never', 'Occasionally', 'Often for several days at a time'] }
    ],
    getResult: (score) => {
        if (score >= 10 && score <= 16) {
            return {
                message: "You may be a Bear.",
                description: "The Bear chronotype is the most common. Your sleep and wake cycle aligns with the sun's rising and setting, meaning you're more alert during the day and prefer to sleep at night."
            };
        } else if (score >= 17 && score <= 23) {
            return {
                message: "You may be a Lion.",
                description: "Lions prefer to wake up early and wind down early, often falling asleep around 9 or 10 p.m. You may feel energetic and productive in the morning."
            };
        } else if (score >= 24 && score <= 30) {
            return {
                message: "You may be a Wolf.",
                description: "Wolves tend to have trouble waking up in the morning and feel more energetic in the afternoon and evening. You might also feel a second energy boost around 6 p.m."
            };
        } else if (score >= 31 && score <= 40) {
            return {
                message: "You may be a Dolphin.",
                description: "Dolphins often have trouble maintaining a consistent sleep schedule and may be sensitive to noise. You're usually most productive in the late morning and early afternoon."
            };
        } else {
            return {
                message: "Based on your responses, your chronotype is unclear.",
                description: "You may fall somewhere in between these types. Understanding your sleep habits and cycles may help you identify your most natural sleep pattern."
            };
        }
    }

},


];
