import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './HomePage.scss';

const HomePage = () => {
    
    const navigate = useNavigate(); // Use useNavigate hook

    const handleButtonClick = () => {
        navigate('/consent'); // Use navigate to change the route
    };

    return (
        <div className="homepage">
            <h1>Welcome to My Experiment</h1>
            <p>This study explores the dynamics of trust in human interactions.</p>
            <button onClick={handleButtonClick}>Participate in Study</button>
        </div>
    );
};

export default HomePage;
