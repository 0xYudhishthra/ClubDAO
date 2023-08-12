import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";

const Home: NextPage = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });

  const loading = (accountLoading || balanceLoading) && !balanceData;

  const renderContent = () => {
    if (accountData) {
      // If wallet is connected
      return (
        <>
        <div className="cards-container">
          <div className="card create-dao-card">
            <div className="card-title">Create DAO</div>
            <div className="card-body">
              Effortlessly mint tokens, configure governance parameters, and deploy your DAO on the blockchain within minutes
            </div>
          </div>
          <div className="card view-dao-card">
            <div className="card-title">View DAO</div>
            <div className="card-body">
              Explore DAO activities, analyze governance decisions, and monitor blockchain-based operations effortlessly
            </div>
          </div>
        </div>
      </>
      );
    } else {
      // If wallet is not connected
      return (
        <>
          <main className="main">
            <div className="mainDiv">
              <h1 className="bigTitle">ClubDAO</h1>
              <div className="research">connect wallet to discover</div>
            </div>
          </main>
        </>
      );
    }
  };
  

  return (
    <>
      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />
      {/* Header */}
      <Layout
        showWalletOptions={showWalletOptions}
        setShowWalletOptions={setShowWalletOptions}
      >
        <div className="grid h-screen place-items-center">
          <div className="grid place-items-center">{renderContent()}</div>
        </div>
      </Layout>
    </>
  );

  const createdao = () => {

  }
};

  

export default Home;
