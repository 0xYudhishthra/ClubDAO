import { useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Layout, WalletOptionsModal } from "../../components";
import { useRouter } from "next/router";
import FrostedGlassBox from "../../components/FrostedCard";
import DAOInputForm from "./dao-input-form"; // Import the DAOInputForm component
import GovernanceSettings from "./governance-settings";

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
            <div className="create-container mt-20">
                <>
                    <FrostedGlassBox className={"h-auto inline-item-center"}>
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
                    <DAOInputForm /> {/* Include the DAOInputForm component here */}
                    <GovernanceSettings />
                </>
            </div>
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
                    {renderContent()}
                </div>
            </Layout>
        </>
    );
};

export default CreateDAO;
