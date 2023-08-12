import React, { useState } from 'react';
import Link from 'next/link';

export default function ForumDashboard() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [questionsList, setQuestionsList] = useState([]);
    const [walletAddress, setWalletAddress] = useState('0x1234...5678'); // Mock wallet address for demonstration

    const handleAskQuestion = async () => {
        // Mock OpenAI API call
        const openAIResponse = "Mock response from OpenAI for: " + question;
        const newQuestion = { text: question, answer: openAIResponse };
        setQuestionsList([...questionsList, newQuestion]);
        setResponse(openAIResponse);
        setQuestion('');
    };

    return (
        <div className="forum-dashboard">
            <h1>Welcome to the Forum Dashboard</h1>

            <div className="user-auth">
                <span>Wallet Address: <strong>{walletAddress}</strong></span>
                <button>Disconnect Wallet</button>
            </div>

            <div className="ask-section">
                <textarea 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your question here..."
                />
                <button onClick={handleAskQuestion}>Ask</button>
            </div>

            {response && (
                <div className="response-section">
                    <h2>Latest Response:</h2>
                    <p>{response}</p>
                </div>
            )}

            <div className="previous-questions">
                <h2>Previous Questions</h2>
                {questionsList.map((q, index) => (
                    <div key={index} className="question-item">
                        <p><strong>Q:</strong> {q.text}</p>
                        <p><strong>A:</strong> {q.answer}</p>
                    </div>
                ))}
            </div>

            <Link href="/network-dashboard">
                <button className="back-button">
                    Back to Network Dashboard
                </button>
            </Link>

            <style jsx>{`
                .forum-dashboard {
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                    border-radius: 8px;
                }
                .user-auth {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                textarea {
                    width: 100%;
                    height: 100px;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }
                .response-section, .previous-questions {
                    margin-top: 20px;
                    border: 1px solid #e0e0e0;
                    padding: 15px;
                    border-radius: 5px;
                    background-color: #fff;
                }
                .question-item {
                    border-bottom: 1px solid #e0e0e0;
                    padding: 10px 0;
                }
                .question-item:last-child {
                    border-bottom: none;
                }
            `}</style>
        </div>
    );
}
