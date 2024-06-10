import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="app-footer">
      <div className="footer-line"></div>
      <div className="footer-top">
        <div className="footer-block">
          <h3>Позвонить нам</h3>
          <p>+7 (985) 999-99-99</p>
        </div>
        <div className="footer-block">
          <h3>График работы</h3>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: 10:00 - 16:00</p>
        </div>
        <div className="footer-block">
          <h3>Адрес</h3>
          <p>123 Улица, Город, Страна</p>
        </div>
        <div className="footer-block">
          <h3>Забронировать столик</h3>
          <p>+7 (985) 999-99-99</p>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">
        ©2024 Люкс и Вкус. Все права защищены. - <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
      </div>
    </Footer>
  );
};

export default AppFooter;
