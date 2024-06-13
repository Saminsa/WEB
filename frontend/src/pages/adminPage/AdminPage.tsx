/* eslint-disable @typescript-eslint/no-explicit-any */
// src/AdminPage.tsx

import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@tanstack/react-query';
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
import "./AdminPage.css";
import { BookingItem, deleteBooking, fetchBookings, updateBookingStatus } from "../../api/api";

dayjs.extend(isToday);

const { Title, Text } = Typography;

export const AdminPage: React.FC = () => {
  // const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [filteredBookings, setFilteredBookings] = useState<BookingItem[]>([]);
  const [todayBookingsCount, setTodayBookingsCount] = useState(0);

  const { data: bookings = [], refetch } = useQuery({
   queryKey: ['bookings'],
   queryFn: fetchBookings
  });

  useEffect(() => {
    const filtered = bookings?.filter((booking) =>
      dayjs(booking.Datetime).isSame(selectedDate, "day")
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

  const { mutate: mutateStatus } = useMutation({
    mutationFn: updateBookingStatus,
    onSuccess: () => {
      message.success("Статус брони обновлен!");
      refetch();
    },
  });

  const handleBookingStatusChange = (id: number, status: string) => {
    mutateStatus({ id, status });
  };

  const { mutate: mutateDelete } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      message.success("Бронь удалена!");
      refetch();
    },
  });

  const handleDeleteBooking = (id: number) => {
    Modal.confirm({
      title: "Вы уверены, что хотите удалить эту бронь?",
      onOk: () => {
        mutateDelete(id);
      },
    });
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "Name",
      key: "name",
    },
    {
      title: "Телефон",
      dataIndex: "Phone",
      key: "phone",
    },
    {
      title: "Дата и время",
      dataIndex: "Datetime",
      key: "datetime",
    },
    {
      title: "Статус",
      dataIndex: "Status",
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
      render: (_: any, record: BookingItem) => (
        <span>
          <Button
            type="text"
            onClick={() => handleBookingStatusChange(record.ID, "Состоялась")}
            style={{
              color: "#00FF00",
            }}
          >
            Гость пришел
          </Button>
          <Button
            type="text"
            onClick={() =>
              handleBookingStatusChange(record.ID, "Не состоялась")
            }
            style={{
              color: "#FFA500",
            }}
          >
            Гость не пришел
          </Button>
          <Button
            type="text"
            danger
            onClick={() => handleDeleteBooking(record.ID)}
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
            rowKey="ID"
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