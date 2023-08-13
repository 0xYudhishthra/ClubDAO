import React, { useState } from 'react';
import Link from 'next/link';
import { useAccount, useBalance } from 'wagmi';
import { Button, Layout, Loader, WalletOptionsModal } from "../../components";

export default function SubDAODashboard() {
    const [showWalletOptions, setShowWalletOptions] = useState(false);
    const [{ data: accountData, loading: accountLoading }] = useAccount();
    const [{ data: balanceData, loading: balanceLoading }] = useBalance({
        addressOrName: accountData?.address,
        watch: true,
    });

    return (
        <>
        <Layout showWalletOptions={showWalletOptions} setShowWalletOptions={setShowWalletOptions}>
            <div className="dashboard">
                <h1 className="text-3xl font-bold mt-20">SubDAO Dashboard</h1>

                <div className="buttons flex gap-4 mt-8">
                    <Link href="/path-to-your-bounties-page">
                        <button className="btn">Bounties</button>
                    </Link>
                    <Link href="/path-to-your-network-page">
                        <button className="btn">Network</button>
                    </Link>
                    <Link href="/path-to-your-forum-page">
                        <button className="btn">Forum</button>
                    </Link>
                    <Link href="/path-to-your-hats-info-page">
                        <button className="btn">Hats Info</button>
                    </Link>
                </div>
            </div>
        </Layout>
        </>
    );
}
