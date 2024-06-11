import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const { Header } = Layout;

export const AppHeader: React.FC = () => {
  const [headerColor, setHeaderColor] = useState<string>("transparent");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setHeaderColor('#001529');
      } else {
        setHeaderColor(location.pathname === '/' ? 'transparent' : '#001529');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set header color based on current path
    if (location.pathname === '/') {
      setHeaderColor(window.scrollY > 50 ? '#001529' : 'transparent');
    } else {
      setHeaderColor('#001529');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <Header style={{ backgroundColor: headerColor, transition: "0.3s" }}>
      <div
        className="logo"
        onClick={() => {
          scrollToTop();
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        style={{ backgroundColor: headerColor }}
      >
        <Menu.Item key="1" onClick={() => navigate("/")}>
          Главная
        </Menu.Item>
        <Menu.Item key="2" onClick={() => navigate("/menu")}>
          Меню
        </Menu.Item>
        <Menu.Item key="3" onClick={() => navigate("/booking")}>
          Бронь
        </Menu.Item>
      </Menu>
    </Header>
  );
};
