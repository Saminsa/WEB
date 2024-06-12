/* eslint-disable @typescript-eslint/no-explicit-any */
// src/AdminPage.tsx

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Table,
  Typography,
  Row,
  Col,
  Button,
  Modal,
  message,
} from "antd";
import dayjs, { Dayjs } from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { bookings as initialBookings } from "../../mockData/bookingsData";
import "./AdminPage.css";

dayjs.extend(isToday);

const { Title, Text } = Typography;

interface Booking {
  id: number;
  name: string;
  phone: string;
  datetime: string;
  status: string;
}

export const AdminPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [todayBookingsCount, setTodayBookingsCount] = useState(0);
  const [bookings, setBookings] = useState(initialBookings);

  useEffect(() => {
    const filtered = bookings.filter((booking) =>
      dayjs(booking.datetime).isSame(selectedDate, "day")
    );
    setFilteredBookings(filtered);
  }, [selectedDate, bookings]);

  useEffect(() => {
    const todayCount = filteredBookings.length;
    setTodayBookingsCount(todayCount);
  }, [filteredBookings]);

  const onSelect = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const handleBookingStatusChange = (id: number, status: string) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
    message.success("Статус брони обновлен!");
  };

  const handleDeleteBooking = (id: number) => {
    Modal.confirm({
      title: "Вы уверены, что хотите удалить эту бронь?",
      onOk: () => {
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
        message.success("Бронь удалена!");
      },
    });
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Дата и время",
      dataIndex: "datetime",
      key: "datetime",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Text
          style={{
            color:
              status === "Состоялась"
                ? "green"
                : status === "Не состоялась"
                ? "red"
                : "orange",
          }}
        >
          {status}
        </Text>
      ),
    },
    {
      title: "Действия",
      key: "actions",
      render: (_: any, record: Booking) => (
        <span>
          <Button
            type="link"
            onClick={() => handleBookingStatusChange(record.id, "Состоялась")}
            style={{
              color: "#fff",
            }}
          >
            Гость пришел
          </Button>
          <Button
            type="link"
            onClick={() =>
              handleBookingStatusChange(record.id, "Не состоялась")
            }
            style={{
              color: "#fff",
            }}
          >
            Гость не пришел
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteBooking(record.id)}
          >
            Удалить
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div className="admin-page">
      <Title level={2}>Администрирование Бронирований</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Calendar fullscreen={false} onSelect={onSelect} />
        </Col>
        <Col span={16}>
          <Title level={4}>
            Бронирования на {selectedDate.format("YYYY-MM-DD")}
          </Title>
          <Table
            pagination={false}
            columns={columns}
            dataSource={filteredBookings}
            rowKey="id"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <Text>Количество броней на сегодня: {todayBookingsCount}</Text>
        </Col>
      </Row>
    </div>
  );
};
