import React from 'react';
import Link from 'next/link';

export default function HackathonBountiesDashboard() {
    const hackathonBounties = [
        { id: 1, title: 'Decentralized Voting System', sponsor: 'Ethereum Foundation', reward: '10 ETH', status: 'Open' },
        { id: 2, title: 'Cross-chain Asset Bridge', sponsor: 'Polygon', reward: '8 ETH', status: 'In Progress' },
        { id: 3, title: 'NFT Marketplace', sponsor: 'OpenSea', reward: '15 ETH', status: 'Completed' },
    ];

    return (
        <div className="hackathon-bounties-dashboard flex flex-col items-center gap-20 p-20">
            <h1 className="text-2xl font-bold">Hackathon Bounties</h1>

            <div className="bounties-list w-full max-w-md">
                {hackathonBounties.map(bounty => (
                    <div key={bounty.id} className="bounty-item p-4 border rounded-md border-gray-300">
                        <h2 className="text-lg font-semibold">{bounty.title}</h2>
                        <p>Sponsored by: {bounty.sponsor}</p>
                        <p>Reward: {bounty.reward}</p>
                        <p>Status: {bounty.status}</p>
                    </div>
                ))}
            </div>

            <Link href="/subdao-dashboard">
                <button className="back-button mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Back to SubDAO Dashboard
                </button>
            </Link>
        </div>
    );
}
