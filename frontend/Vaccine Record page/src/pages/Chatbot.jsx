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
