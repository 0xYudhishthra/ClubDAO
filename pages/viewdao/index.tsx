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
          <h1 className="mb-8 text-4xl font-bold">View Current DAOs</h1>
          <div className="inline-flex place-items-center">
            <div className="min-h-screen flex justify-center items-center font-bold text-gray-700 bg-cover bg-center bg-no-repeat">
                <FrostedGlassBox>
                <p>Fuck Glass /<br />Fuck Glass /<br />Acrylic Effect w/ CSS</p>
                </FrostedGlassBox>
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
