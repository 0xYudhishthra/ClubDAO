import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from "next/router";
import FrostedGlassBox from '../../components/FrostedCard';

const SubDAOCreationDashboard = () => {
    const [hatId, setHatId] = useState<number>(0);
    const [newImageURI, setNewImageURI] = useState<string>('');
    const [wearer, setWearer] = useState<string>('');

    const account = useAccount();
    const router = useRouter();

    // Placeholder function to test if everything is working
    const testFunction = () => {
        if (account) {
            console.log('Account is:', account);
            alert('Everything seems to be working fine!');
        } else {
            console.error('No account detected.');
            alert('No account detected. Please connect your wallet.');
        }
    };

    // TODO: Implement the contract interactions using wagmi
    // For now, we'll just have placeholder functions

    const handleSubChangeHatImageURI = async () => {
        // TODO: Implement the contract call to subChangeHatImageURI
        console.log('subChangeHatImageURI called with:', hatId, newImageURI);
    };

    const handleSubMintHat = async () => {
        // TODO: Implement the contract call to subMintHat
        console.log('subMintHat called with:', hatId, wearer);
    };

    // ... Add more handlers for other functions ...

    return (
        <FrostedGlassBox className={"h-auto"}>
            <div>
                <h2>SubDAO Creation Dashboard</h2>

                <div>
                    <label>Hat ID:</label>
                    <input type="number" value={hatId} onChange={(e) => setHatId(Number(e.target.value))} />
                </div>

                <div>
                    <label>New Image URI:</label>
                    <input type="text" value={newImageURI} onChange={(e) => setNewImageURI(e.target.value)} />
                    <button onClick={handleSubChangeHatImageURI}>Change Hat Image URI</button>
                </div>

                <div>
                    <label>Wearer Address:</label>
                    <input type="text" value={wearer} onChange={(e) => setWearer(e.target.value)} />
                    <button onClick={handleSubMintHat}>Mint Hat</button>
                </div>

                <button onClick={testFunction}>Test Connection</button>

                {/* Add more UI components for other functions... */}
            </div>
        </FrostedGlassBox>
    );
};

export default SubDAOCreationDashboard;
