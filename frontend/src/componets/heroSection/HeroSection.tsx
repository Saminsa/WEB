import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="overlay">
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/booking")}
        >
          ЗАБРОНИРОВАТЬ
        </Button>
      </div>
    </div>
  );
};
