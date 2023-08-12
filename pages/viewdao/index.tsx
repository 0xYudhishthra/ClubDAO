import React from "react";
import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal} from "../../components";
import FrostedGlassBox from "../../components/FrostedCard";

const Home: NextPage = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });

  const loading = (accountLoading || balanceLoading) && !balanceData;

  const renderContent = () => {
    if (loading) return <Loader size={8} />;

    return (
        <>
          <h1 className="mb-6 mt-8 text-4xl font-bold">Here are all your DAOs</h1>
          <div className="inline-flex place-items-center">
            {/* Create hooks from smart contract */}
            <FrostedGlassBox className="mx-10">
                <h1 className="mb-8 text-3xl font-bold">DAO NAME</h1>
                <h2>DAO Description</h2>
            </FrostedGlassBox>
                <div className="flex justify-center items-center h-full">
                    <Button loading={false}>Create New DAO</Button>
                </div>
          </div>

          <h1 className="mb-6 mt-8 text-3xl font-bold">Here are all your subDAOs</h1>
          <div className="inline-flex place-items-center">
            {/* Create hooks from smart contract */}
            <FrostedGlassBox className="mx-10">
                <h1 className="mb-8 text-3xl font-bold">DAO NAME</h1>
                <h2>DAO Description</h2>
            </FrostedGlassBox>
                <div className="flex justify-center items-center h-full">
                    <Button loading={false}>Create subDAO</Button>
                </div>
          </div>
        </>
      );
    };

  return (
    <>
      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />

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
};

export default Home;
