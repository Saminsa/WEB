import React from 'react';
import { Layout, Button } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import { UpOutlined } from '@ant-design/icons';
import './App.css';
import AppHeader from './componets/header/Header';
import AppFooter from './componets/footer/Footer';
import InformationBlock1 from './componets/informationBlock1/InformationBlock1';
import InformationBlock2 from './componets/informationBlock2/InformationBlock2';

const { Content } = Layout;

export const App: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Layout>
      <AppHeader />
      <Content style={{ minHeight: '100vh' }}>
        <div className="hero-section">
          <div className="overlay">
            <Button type="primary" size="large">ЗАБРОНИРОВАТЬ</Button>
          </div>
        </div>
        <InformationBlock1 />
        <InformationBlock2 />
      </Content>
      <Button 
        type="primary" 
        shape="circle" 
        icon={<UpOutlined />} 
        size="large" 
        className="scroll-to-top" 
        onClick={scrollToTop} 
      />
      <AppFooter />
    </Layout>
  );
};