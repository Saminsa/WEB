import React from "react";
import { FloatButton } from "antd";
import {
  HeroSection,
  InformationBlock1,
  InformationBlock2,
} from "../componets";
import "../App.css";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InformationBlock1 />
      <InformationBlock2 />
      <FloatButton.BackTop type="primary" />
    </>
  );
};
