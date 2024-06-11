/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { DateTimePicker } from "../../componets/dateTimePicker/DateTimePicker";
import "./BookingPage.css";

export const BookingPage: React.FC = () => {
  const [form] = Form.useForm();
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  const countDown = () => {
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

  const onFinish = (values: any) => {
    console.log("Success:", values);
    countDown()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
          name="phone"
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
          name="name"
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
