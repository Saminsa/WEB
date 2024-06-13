import React from "react";
import { Tabs, List, Typography, Image } from "antd";
import { useQuery } from "@tanstack/react-query";
import { placeholderImage } from "../../constatns";
import { fetchMenuItems } from "../../api/api";
import "./MenuPage.css";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

export const MenuPage: React.FC = () => {
  const { data: menuItems, isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: () => fetchMenuItems()
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

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
            dataSource={menuItems?.filter((item) => item.Category === 'snacks')} // menuData.snacks
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'salads')} // menuData.salads
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'soups')}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'mainDishes')}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'vegetarian')}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'desserts')}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
            dataSource={menuItems?.filter((item) => item.Category === 'drinks')}
            renderItem={(item) => (
              <List.Item className="menu-item">
                <List.Item.Meta
                  avatar={
                    <Image width={100} src={item.ImageURL || placeholderImage} />
                  }
                  title={
                    <Text strong className="menu-item-title">
                      {item.Name}
                    </Text>
                  }
                  description={
                    <Text strong className="menu-item-price">
                      {item.Price} руб.
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
