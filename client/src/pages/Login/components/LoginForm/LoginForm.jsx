import React from "react";
import { Checkbox, Form, Input } from "antd";
import { rules } from "@/utils/rules";
import { loginAction } from "@/store/reducers/auth/asyncActions";
import Button from "@/components/Button";

import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Title from "@/components/Title/Title";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "@/router/routes";

const LoginForm = () => {
  const { error, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { login, password, remember: sync } = values;
    dispatch(loginAction({ login, password, sync }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Title>Вход</Title>
        <div className={styles.container}>
          <Form
            size="large"
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Form.Item name="login" rules={[rules.required()]}>
              <Input placeholder="Логин" />
            </Form.Item>
            <Form.Item name="password" rules={[rules.required()]}>
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item noStyle>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles.checkbox}>Запомнить меня</Checkbox>
              </Form.Item>
              <NavLink to={ROUTE_NAMES.LANDING} className={styles.link}>
                Забыли пароль?
              </NavLink>
            </Form.Item>
            <Form.Item noStyle>
              <Button type="black" block style={{ margin: "32px 0 12px" }}>
                Войти
              </Button>
            </Form.Item>
            <span className={styles.text}>Нет аккаунта?</span>
            <NavLink to={ROUTE_NAMES.LANDING} className={styles.link}>
              Зарегистрироваться
            </NavLink>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
