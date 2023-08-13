import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../../components";
import { useRouter } from "next/router";
import FrostedGlassBox from '../../components/FrostedCard';

export default function HackathonBountiesDashboard() {

    const [showWalletOptions, setShowWalletOptions] = useState(false);
    const [{ data: accountData, loading: accountLoading }] = useAccount();
    const [{ data: balanceData, loading: balanceLoading }] = useBalance({
      addressOrName: accountData?.address,
      watch: true,
    });

    const hackathonBounties = [
        { id: 1, title: 'Decentralized Voting System', sponsor: 'Ethereum Foundation', reward: '10 ETH', status: 'Open' },
        { id: 2, title: 'Cross-chain Asset Bridge', sponsor: 'Polygon', reward: '8 ETH', status: 'In Progress' },
        { id: 3, title: 'NFT Marketplace', sponsor: 'OpenSea', reward: '15 ETH', status: 'Completed' },
    ];

    return (
        <>
        {/* <WalletOptionsModal open={showWalletOptions} setOpen={setShowWalletOptions}/> */}
        <Layout showWalletOptions={showWalletOptions} setShowWalletOptions={setShowWalletOptions} children={undefined} />
        <div className="hackathon-bounties-dashboard flex flex-col items-center gap-20 p-20">
            <h1 className="text-3xl font-bold mt-20">Hackathon Bounties</h1>

            <div className="bounties-list inline-flex place-items-center">
                {hackathonBounties.map(bounty => (
                    // <div key={bounty.id} className="bounty-item p-4 border rounded-md border-gray-300">
                    <FrostedGlassBox key={bounty.id} className="bounty-item p-4 border rounded-md ">
                        <h2 className="text-lg font-semibold">{bounty.title}</h2>
                        <p>Sponsored by: {bounty.sponsor}</p>
                        <p>Reward: {bounty.reward}</p>
                        <p>Status: {bounty.status}</p>
                    {/* </div> */}
                    </FrostedGlassBox>
                ))}
            </div>

            <Link href="/subdao-dashboard">
                <Button loading={false}>Back to SubDAO Dashboard</Button>
            </Link>
        </div>
        </>
    );
}
