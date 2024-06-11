import React from "react";
import { Tabs, List, Typography, Image } from "antd";
import { menuData } from "../../mockData/menuData";
import { placeholderImage } from "../../constatns";
import "./MenuPage.css";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <Title
        style={{
          color: "#fff",
        }}
      >
        Меню
      </Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Закуски" key="1">
          <List
            itemLayout="horizontal"
            dataSource={menuData.snacks}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Салаты" key="2">
          <List
            itemLayout="horizontal"
            dataSource={menuData.salads}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Супы" key="3">
          <List
            itemLayout="horizontal"
            dataSource={menuData.soups}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Основные блюда" key="4">
          <List
            itemLayout="horizontal"
            dataSource={menuData.mainDishes}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Вегетарианские блюда" key="5">
          <List
            itemLayout="horizontal"
            dataSource={menuData.vegetarian}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Десерты" key="6">
          <List
            itemLayout="horizontal"
            dataSource={menuData.desserts}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Напитки" key="7">
          <List
            itemLayout="horizontal"
            dataSource={menuData.drinks}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.image || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.price} руб.
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};
