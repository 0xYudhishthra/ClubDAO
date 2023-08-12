import React from 'react';
import Link from 'next/link';

export default function HackathonBountiesDashboard() {
    // Sample data for hackathon bounties. You can replace this with actual data fetched from your backend or contract.
    const hackathonBounties = [
        { id: 1, title: 'Decentralized Voting System', sponsor: 'Ethereum Foundation', reward: '10 ETH', status: 'Open' },
        { id: 2, title: 'Cross-chain Asset Bridge', sponsor: 'Polygon', reward: '8 ETH', status: 'In Progress' },
        { id: 3, title: 'NFT Marketplace', sponsor: 'OpenSea', reward: '15 ETH', status: 'Completed' },
        // ... add more bounties as needed
    ];

    return (
        <div className="hackathon-bounties-dashboard">
            <h1>Hackathon Bounties</h1>

            <div className="bounties-list">
                {hackathonBounties.map(bounty => (
                    <div key={bounty.id} className="bounty-item">
                        <h2>{bounty.title}</h2>
                        <p>Sponsored by: {bounty.sponsor}</p>
                        <p>Reward: {bounty.reward}</p>
                        <p>Status: {bounty.status}</p>
                    </div>
                ))}
            </div>

            <Link href="/subdao-dashboard">
                <button className="back-button">
                    Back to SubDAO Dashboard
                </button>
            </Link>

            <style jsx>{`
                .hackathon-bounties-dashboard {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    padding: 20px;
                }

                .bounties-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    width: 100%;
                    max-width: 600px;
                }

                .bounty-item {
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }

                .back-button {
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
}
