import React, { useState } from 'react';
import FrostedGlassBox from '../../components/FrostedCard';
import Button from '../../components/Button';

const DAOInputForm = () => {
    const [daoName, setDAOName] = useState('');
    const [logoImage, setLogoImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setDAOName(event.target.value);
    };

    const handleLogoChange = (event) => {
        // Handle image upload logic here
        // For simplicity, I'm not including the actual image handling code
        setLogoImage(event.target.files[0]);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission or validation here
        // You can use the collected data (daoName, logoImage, description) as needed

        // Reset the form fields
        setDAOName('');
        setLogoImage(null);
        setDescription('');
    };

    return (
        <FrostedGlassBox className={"h-auto"}>
            <form onSubmit={handleSubmit}>
                <div className="card-title font-bold mb-8">Describe your DAO</div>
                <div className="card-body inline-items-center h-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="column flex-1">
                            <label className="mb-1 font-bold">DAO name</label>
                            <input
                                type="text"
                                value={daoName}
                                onChange={handleNameChange}
                                placeholder="Type your DAO's name"
                                maxLength={128}
                                required
                                className="w-full mb-4"
                            />
    
                            <label className="font-bold">Logo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="w-full"
                            />
                        </div>
                        <div className="column">
                            <label className="mb-1 font-bold">Description</label>
                            <textarea
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Type your summary"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
    
                <Button loading={false} type="submit">Submit</Button>
                
            </form>
        </FrostedGlassBox>
    );
    
};

export default DAOInputForm;
