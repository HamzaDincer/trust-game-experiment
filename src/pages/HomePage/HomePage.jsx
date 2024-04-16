import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleButtonClick = () => {
    navigate("/consent"); // Use navigate to change the route
  };

  return (
    <div className="homepage">
      <h1>Deneyime Hoşgeldiniz!</h1>
      <p>
        Bu çalışma, insan etkileşimlerinde güven dinamiklerini araştırmaktadır.
      </p>
      <button onClick={handleButtonClick}>Deneye Katıl</button>
    </div>
  );
};

export default HomePage;
