import React from 'react';
import Link from 'next/link';

export default function NetworkDashboard() {
    const networks = [
        {
            name: 'Optimism',
            description: 'Optimistic Ethereum is a Layer 2 scaling solution for Ethereum.',
            explorerLink: 'https://optimistic.etherscan.io/',
            websiteLink: 'https://optimism.io/'
        },
        {
            name: 'OP Stack',
            description: 'OP Stack is a custom blockchain solution for specific use cases.',
            explorerLink: 'https://opstack.explorer.link/',
            websiteLink: 'https://opstack.io/'
        },
        {
            name: 'Ethereum Mainnet',
            description: 'Ethereum Mainnet is the primary public Ethereum blockchain.',
            explorerLink: 'https://etherscan.io/',
            websiteLink: 'https://ethereum.org/'
        }
    ];

    return (
        <div className="network-dashboard">
            <h1>Network Dashboard</h1>

            <div className="networks-list">
                {networks.map((network, index) => (
                    <div key={index} className="network-item">
                        <h2>{network.name}</h2>
                        <p>{network.description}</p>
                        <a href={network.explorerLink} target="_blank" rel="noopener noreferrer">View Explorer</a>
                        <a href={network.websiteLink} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                ))}
            </div>

            <Link href="/subdao-dashboard">
                <button className="back-button">
                    Back to SubDAO Dashboard
                </button>
            </Link>

            <style jsx>{`
                .network-dashboard {
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .network-item {
                    border: 1px solid #e0e0e0;
                    padding: 15px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                }
                .network-item a {
                    margin-right: 10px;
                    color: #0070f3;
                    text-decoration: none;
                }
                .network-item a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}
