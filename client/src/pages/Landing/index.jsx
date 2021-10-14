import Button from "@/components/Button";
import { ROUTE_NAMES } from "@/router/routes";
import React from "react";
import { useHistory } from "react-router";
import Description from "./components/Description";

export const Landing = () => {
  const history = useHistory();

  return (
    <>
      <Description />

      <Button
        type="primaryLight"
        block
        style={{ marginBottom: 8 }}
        onClick={() => history.push(ROUTE_NAMES.LOGIN)}
      >
        Вход
      </Button>
      <Button
        type="black"
        block
        onClick={() => history.push(ROUTE_NAMES.REGISTRATION)}
      >
        Регистрация
      </Button>
    </>
  );
};
