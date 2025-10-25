// import React, { useEffect, useState } from 'react';
// import { Widget, addResponseMessage, isWidgetOpened } from 'react-chat-widget'; // Added isWidgetOpened
// import 'react-chat-widget/lib/styles.css';
// import axios from 'axios';

// // NOTE: This URL should point to your secure backend server, NOT the public Gemini API endpoint.
// const BACKEND_ENDPOINT = '/api/chat-vaccine'; 

// const Chatbot = () => {
//     const [generatingAnswer, setGeneratingAnswer] = useState(false);

//     const handleNewUserMessage = async (newMessage) => {
//         // Prevent new message processing if an answer is still being generated
//         if (generatingAnswer) {
//             addResponseMessage("Please wait for the current response to finish.");
//             return;
//         }
        
//         // Add the "Thinking..." message immediately
//         addResponseMessage("Thinking..."); 
        
//         // The core logic is now in generateAnswer
//         await generateAnswer(newMessage);
//     };

//     const generateAnswer = async (question) => {
//         if (!question.trim()) {
//             // Remove the 'Thinking...' message added by handleNewUserMessage
//             // This is a limitation with react-chat-widget: you'd need to manually manage message IDs to delete it. 
//             // For simplicity, we'll let the next message replace the last one.
//             addResponseMessage("Please enter a valid question."); 
//             return;
//         }

//         // Check if the question is related to vaccines
//         const isVaccineQuery = /vaccine|vaccination|immunization|dose|booster|side effects|efficacy/i.test(question);

//         if (!isVaccineQuery) {
//             addResponseMessage("Please ask a question related to the vaccine.");
//             return;
//         }

//         setGeneratingAnswer(true); // Start generation

//         try {
//             // ⚠️ SECURITY NOTE: The correct way is to send the question to YOUR OWN secure backend.
//             // The backend then calls the Gemini API with the secret key.
//             const response = await axios.post(
//                 // This is a placeholder for your secure backend endpoint
//                 // BACKEND_ENDPOINT 
//                 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
//                 {
//                     contents: [{ parts: [{ text: `Please provide a short and precise answer related to vaccines: ${question}` }] }],
//                 },
//                 {
//                     // ❌ THIS IS STILL THE VULNERABLE SETUP. 
//                     // This section should be removed when using a secure backend.
//                     params: {
//                         key: 'AIzaSyBWoXs4LTiF52JKJxrxlSpuWme816R-TvY', 
//                     },
//                 }
//             );

//             // Check if there's a valid response and display the answer
//             const generatedAnswer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//             if (generatedAnswer) {
//                 // The new message replaces the 'Thinking...' message
//                 addResponseMessage(generatedAnswer); 
//             } else {
//                 addResponseMessage("Sorry, I couldn't generate an answer.");
//             }
//         } catch (error) {
//             console.error(error);
//             addResponseMessage("Sorry - Something went wrong. Please try again!");
//         } finally {
//             setGeneratingAnswer(false); // Stop generation
//         }
//     };

//     useEffect(() => {
//         // Only show the welcome message once and when the widget is opened (optional)
//         if (isWidgetOpened()) { 
//             addResponseMessage("Welcome to the Vaccine Info Bot! Ask me about vaccines.");
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Vaccine Information Chatbot</h1>
//             <Widget
//                 handleNewUserMessage={handleNewUserMessage}
//                 title="Vaccine Info Bot"
//                 subtitle={generatingAnswer ? "Generating answer..." : "Ask me about vaccines!"}
//                 // Optionally disable input while generating
//                 // senderPlaceHolder={generatingAnswer ? "Please wait..." : "Type a message..."} 
//             />
//         </div>
//     );
// };

// export default Chatbot;


import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

const Chatbot = () => {
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    const handleNewUserMessage = async (newMessage) => {
        addResponseMessage("Thinking...");
        await generateAnswer(newMessage);
    };

    const generateAnswer = async (question) => {
        if (!question.trim()) {
            addResponseMessage("Please enter a valid question.");
            return;
        }

        setGeneratingAnswer(true);
        

        // Check if the question is related to vaccines
        const isVaccineQuery = /vaccine|vaccination|immunization|dose|booster|side effects|efficacy/i.test(question);

        if (!isVaccineQuery) {
            addResponseMessage("Please ask a question related to the vaccine.");
            setGeneratingAnswer(false);
            return;
        }

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
                {
                    contents: [{ parts: [{ text: `Please provide a short and precise answer related to vaccines: ${question}` }] }],
                },
                {
                    params: {
                        key: 'AIzaSyBWoXs4LTiF52JKJxrxlSpuWme816R-TvY',
                    },
                }
            );

            // Check if there's a valid response and display the answer
            const generatedAnswer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (generatedAnswer) {
                addResponseMessage(generatedAnswer);
            } else {
                addResponseMessage("Sorry, I couldn't generate an answer.");
            }
        } catch (error) {
            console.error(error);
            addResponseMessage("Sorry - Something went wrong. Please try again!");
        } finally {
            setGeneratingAnswer(false);
        }
    };

    useEffect(() => {
        addResponseMessage("Welcome to the Vaccine Info Bot! Ask me about vaccines.");
    }, []);

    return (
        <div>
            <h1>Vaccine Information Chatbot</h1>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title="Vaccine Info Bot"
                subtitle="Ask me about vaccines!"
            />
        </div>
    );
};

export default Chatbot;
