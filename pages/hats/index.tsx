import React, { useState, useEffect } from 'react';

export default function HatsInfoDashboard() {
    const [hats, setHats] = useState([]);

    // Mock data for demonstration purposes
    useEffect(() => {
        const mockHatsData = [
            { id: 1, name: 'Hat Alpha', imageURI: '/path/to/image1.jpg', maxSupply: 1000, currentSupply: 500 },
            { id: 2, name: 'Hat Beta', imageURI: '/path/to/image2.jpg', maxSupply: 2000, currentSupply: 1500 },
            // ... add more mock hats as needed
        ];
        setHats(mockHatsData);
    }, []);

    return (
        <div className="hats-dashboard">
            <h1>Hats Protocol - Hats Info</h1>

            <div className="hats-list">
                {hats.map((hat) => (
                    <div key={hat.id} className="hat-item">
                        <img src={hat.imageURI} alt={hat.name} />
                        <h2>{hat.name}</h2>
                        <p><strong>Max Supply:</strong> {hat.maxSupply}</p>
                        <p><strong>Current Supply:</strong> {hat.currentSupply}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .hats-dashboard {
                    padding: 20px;
                    max-width: 1000px;
                    margin: 0 auto;
                    background-color: #f4f4f4;
                    border-radius: 8px;
                }
                .hats-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }
                .hat-item {
                    width: 200px;
                    padding: 15px;
                    border: 1px solid #e0e0e0;
                    border-radius: 5px;
                    background-color: #fff;
                    text-align: center;
                }
                img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
}
