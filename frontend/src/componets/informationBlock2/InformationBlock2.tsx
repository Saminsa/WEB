import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './InformationBlock2.css';

const InformationBlock2: React.FC = () => {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="text-section">
          <h1>Наше местоположение</h1>
          <p>
            Наш ресторан расположен в самом центре города, что делает его удобным для посещения в любое время.
            Вы можете нас найти по адресу: улица Примерная, дом 1. Мы всегда рады видеть вас!
          </p>
          <p>
            Забронировать столик и уточнить детали вы можете по телефону: +7 (985) 999-99-99.
          </p>
        </div>
        <div className="map-section">
          <YMaps>
            <Map
              defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
              width="100%"
              height="100px"
            >
              <Placemark geometry={[55.751574, 37.573856]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default InformationBlock2;
