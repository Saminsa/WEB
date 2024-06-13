import React from "react";
import { DatePicker, Form } from "antd";

export const DateTimePicker: React.FC = () => {

  return (
    <Form.Item
      name="Datetime"
      label="Дата и время"
      rules={[
        { required: true, message: "Пожалуйста, выберите дату и время!" },
      ]}
    >
      <DatePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
      />
    </Form.Item>
  );
};
