import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import './Header.css';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const [headerColor, setHeaderColor] = useState<string>('transparent');

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setHeaderColor('#001529');
    } else {
      setHeaderColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header style={{ backgroundColor: headerColor, transition: '0.3s' }}>
      <div className="logo" onClick={()=>{
        scrollToTop()
      }}/>
      <Menu theme="dark" mode="horizontal" selectable={false} style={{ backgroundColor: headerColor }}>
        <Menu.Item key="1">Главная</Menu.Item>
        <Menu.Item key="2">Меню</Menu.Item>
        <Menu.Item key="3">Бронь</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;