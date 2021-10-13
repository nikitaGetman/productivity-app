import React from "react";
import { Form, Input, Checkbox } from "antd";
import Button from "@/components/Button";

import styles from "./SettingsForm.module.css";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/store/reducers/auth/asyncActions";

const SettingsForm = () => {
  const dispatch = useDispatch();

  return (
    <Form size="large">
      <Form.Item label="Имя" name="name">
        <Input placeholder="Ваше имя" />
      </Form.Item>
      <Form.Item label="Фамилия" name="surname">
        <Input placeholder="Ваша фамилия" />
      </Form.Item>

      <Form.Item label="Логин телеграм" name="telegram">
        <Input placeholder="Ваша фамилия" addonBefore="@" />
      </Form.Item>

      <Form.Item name="botEnabled">
        <Checkbox>Включить уведомления телеграмм</Checkbox>
      </Form.Item>

      <Form.Item label="Новый пароль" name="password">
        <Input.Password placeholder="Новый пароль" />
      </Form.Item>

      <Form.Item label="Подтвердите пароль" name="passwordConfirm">
        <Input.Password placeholder="Новый пароль" />
      </Form.Item>

      <Button type="primary" block style={{ marginBottom: 12 }}>
        Сохранить
      </Button>
      <Button type="danger" onClick={() => dispatch(logoutAction())}>
        Выйти
      </Button>
    </Form>
  );
};

export default SettingsForm;
