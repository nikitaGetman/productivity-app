import React from "react";
import { Form, Input, Checkbox } from "antd";
import Button from "@/components/Button";

import styles from "./SettingsForm.module.css";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/store/reducers/auth/asyncActions";
import { rules } from "@/utils/rules";
import { useSelector } from "react-redux";

const SettingsForm = () => {
  const dispatch = useDispatch();
  const { name, surname } = useSelector((store) => store.auth.user);

  const handleSubmit = async (values) => {
    console.log(values);
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <Form
      size="large"
      initialValues={{ name, surname }}
      onFinish={handleSubmit}
    >
      <Form.Item label="Имя" name="name">
        <Input placeholder="Ваше имя" />
      </Form.Item>
      <Form.Item label="Фамилия" name="surname">
        <Input placeholder="Ваша фамилия" />
      </Form.Item>

      <Form.Item label="Логин телеграм" name="telegram">
        <Input placeholder="Логин телеграм" addonBefore="@" />
      </Form.Item>

      <Form.Item name="botEnabled" valuePropName="checked">
        <Checkbox>Включить уведомления телеграмм</Checkbox>
      </Form.Item>

      <Form.Item label="Старый пароль" name="oldPassword">
        <Input.Password placeholder="Старый пароль" />
      </Form.Item>

      <Form.Item
        label="Новый пароль"
        name="password"
        rules={[rules.password()]}
      >
        <Input.Password placeholder="Новый пароль" />
      </Form.Item>

      <Form.Item
        label="Подтвердите пароль"
        name="passwordConfirm"
        rules={[rules.passwordConfirm]}
      >
        <Input.Password placeholder="Новый пароль" />
      </Form.Item>

      <Button type="primary" block style={{ marginBottom: 12 }}>
        Сохранить
      </Button>
      <Button type="danger" onClick={logout}>
        Выйти
      </Button>
    </Form>
  );
};

export default SettingsForm;
