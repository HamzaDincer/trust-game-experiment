import React from 'react';

const HomePage = ({ onNext }) => {
    return (
        <div className="homepage">
            <h1>Welcome to My Experiment</h1>
            <p>This study explores the dynamics of trust in human interactions.</p>
            <button onClick={onNext}>Participate in Study</button>
        </div>
    );
};

export default HomePage;