import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../../components";
import { useRouter } from "next/router";
import FrostedGlassBox from "../../components/FrostedCard";



const CreateDAO = () => {
    const [showWalletOptions, setShowWalletOptions] = useState(false);
    const [{ data: accountData, loading: accountLoading }] = useAccount();
    const [{ data: balanceData, loading: balanceLoading }] = useBalance({
        addressOrName: accountData?.address,
        watch: true,
    });

    const loading = (accountLoading || balanceLoading) && !balanceData;
    const router = useRouter();


    const renderContent = () => {
        return (
            <>
                <div className="create-container ">
                    {/* <div className="create select-blockchain-card">
                        <div className="card-title mb-8 font-bold">Select Blockchain</div>
                        <div className="list-choice">
                            <div className="list-choice-title">Testnet</div>
                                <div className="list-choice-objects">
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Optimism Goerli</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Base Goerli</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Zora Testnet</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Mode Testnet</span>
                                    </label>
                                </div>
                        </div>
                    </div>
                    <div className="create">
                        <div className="card-title font-bold mb-8 ">Describe your DAO</div>
                        <div className="card-body">
                        This section is where you can articulate the essence of your DAO. Outline the purpose, values, and goals that define your decentralized autonomous organization, guiding potential contributors in understanding its unique identity.</div>
                        <div> </div>
                    </div> */}
                    <FrostedGlassBox className={"h-auto"}>
                    <div className="card-title mb-8 font-bold">Select Blockchain</div>
                        <div className="list-choice">
                            <div className="list-choice-title">Testnet</div>
                                <div className="list-choice-objects">
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Optimism Goerli</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Base Goerli</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Zora Testnet</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="testnet" />
                                        <span>Mode Testnet</span>
                                    </label>
                                </div>
                        </div>
                    </FrostedGlassBox>
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

export default CreateDAO;
