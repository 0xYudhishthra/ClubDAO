import React, { useState } from 'react';
import Web3 from 'web3';

const SubDAOCreationDashboard = () => {
    const [hatId, setHatId] = useState<number>(0);
    const [newImageURI, setNewImageURI] = useState<string>('');
    const [wearer, setWearer] = useState<string>('');

    const web3 = new Web3(Web3.givenProvider); // Connects to Metamask
    const subDAOFactoryContractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
    const subDAOFactoryABI = []; // Your ABI here

    const contract = new web3.eth.Contract(subDAOFactoryABI, subDAOFactoryContractAddress);

    const handleSubChangeHatImageURI = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const senderAddress = accounts[0];

            await contract.methods.subChangeHatImageURI(hatId, newImageURI).send({ from: senderAddress });
            console.log('Hat Image URI changed successfully');
        } catch (error) {
            console.error('Error changing Hat Image URI:', error);
        }
    };

    const handleSubMintHat = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const senderAddress = accounts[0];

            await contract.methods.subMintHat(hatId, wearer).send({ from: senderAddress });
            console.log('Hat minted successfully');
        } catch (error) {
            console.error('Error minting hat:', error);
        }
    };

    // Add more handlers for other functions as needed...

    return (
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

            {/* Add more UI components for other functions... */}

        </div>
    );
};

export default SubDAOCreationDashboard;
