import React from 'react';
import Link from 'next/link';
// import { useContract } from 'wagmi';

// Assuming you have the ABI and contract address for your SubDAO
// const subDAOFactoryABI = [...]; // Your ABI here
// const subDAOFactoryContractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';

export default function SubDAODashboard() {
    // Commented out for now as you mentioned
    // const contract = useContract(subDAOFactoryABI, subDAOFactoryContractAddress);

    return (
        <div className="dashboard">
            <h1>SubDAO Dashboard</h1>

            <div className="buttons">
                <Link href="/path-to-your-bounties-page">
                    <button>
                        Bounties
                    </button>
                </Link>
                <Link href="/path-to-your-network-page">
                    <button>
                        Network
                    </button>
                </Link>
                <Link href="/path-to-your-forum-page">
                    <button>
                        Forum
                    </button>
                </Link>
                <Link href="/path-to-your-hats-info-page">
                    <button>
                        Hats Info
                    </button>
                </Link>
            </div>

            <style jsx>{`
                .dashboard {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .buttons {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </div>
    );
}
