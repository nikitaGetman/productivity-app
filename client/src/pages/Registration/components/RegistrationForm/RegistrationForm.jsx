import React from "react";
import { Form, Input } from "antd";
import { rules } from "@/utils/rules";
import { registerAction } from "@/store/reducers/auth/asyncActions";
import Button from "@/components/Button";

import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Title from "@/components/Title/Title";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "@/router/routes";

const RegistrationForm = () => {
  const { error, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { name, email, password } = values;
    dispatch(registerAction({ name, email, password }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Title>Регистрация</Title>
        <div className={styles.container}>
          <Form size="large" name="registration-form" onFinish={handleSubmit}>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Form.Item name="name" rules={[rules.required()]}>
              <Input placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item name="email" rules={[rules.required(), rules.email()]}>
              <Input placeholder="E-mail" type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[rules.required(), rules.password()]}
            >
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item noStyle>
              <Button
                type="black"
                block
                style={{ margin: "32px 0 12px" }}
                loading={isLoading}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <span className={styles.text}>Уже есть аккаунт?</span>
            <NavLink to={ROUTE_NAMES.LOGIN} className={styles.link}>
              Войти
            </NavLink>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
