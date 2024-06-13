/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Form, Input, Button, Modal } from "antd";
import { DateTimePicker } from "../../componets/dateTimePicker/DateTimePicker";
import { BookingItem, createBooking } from "../../api/api";
import "./BookingPage.css";

export const BookingPage: React.FC = () => {
  const [form] = Form.useForm<BookingItem>();
  const [modal, contextHolder] = Modal.useModal();

  const createBookingMutation = useMutation<BookingItem, Error, BookingItem>({
    mutationFn: createBooking,
    onSuccess: () => {
      countDownSuccess();
    },
    onError: () => {
      countDownError();
    },
  });

  const countDownSuccess = () => {
    let secondsToGo = 5;

    const instance = modal.success({
      title: "Спасибо за бронь!",
      content: `С вами свяжутся в ближайшее время для подтверждения брони.`,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const countDownError = () => {
    let secondsToGo = 5;

    const instance = modal.error({
      title: "Ошибка!",
      content: `Ошибка при создании бронирования!`,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  const onFinish = (values: BookingItem) => {
    console.log("Success:", values);
    values.Status = "Запланирована";
    createBookingMutation.mutate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    countDownError();
  };

  return (
    <div className="booking-page">
      <h1>Бронирование стола</h1>
      <Form
        form={form}
        name="booking"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Номер телефона"
          name="Phone"
          rules={[
            { required: true, message: "Пожалуйста, введите номер телефона!" },
            {
              pattern: /^\+?[1-9]\d{1,14}$/,
              message: "Пожалуйста, введите действительный номер телефона!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Имя"
          name="Name"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input />
        </Form.Item>
        <DateTimePicker />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Забронировать
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  );
};
