import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { AppFooter, AppHeader } from "./componets";
import { BookingPage, HomePage, MenuPage, AdminPage } from "./pages";
import "./App.css";

const { Content } = Layout;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppHeader />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
};
