import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { privateRoutes, publicRoutes, ROUTE_NAMES } from "./routes";

export const AppRouter = () => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  // if (isLoading) {
  //   return <Spin tip="Загрузка..." size="large" className="global-loader" />;
  // }

  return isAuth ? (
    <MainLayout>
      <Switch>
        {privateRoutes.map(({ path, component }) => (
          <Route path={path} component={component} key={path} exact />
        ))}
        <Redirect to={ROUTE_NAMES.CHALLENGES} />
      </Switch>
    </MainLayout>
  ) : (
    <AuthLayout>
      <Switch>
        {publicRoutes.map(({ path, component }) => (
          <Route path={path} component={component} key={path} exact />
        ))}
        <Redirect to={ROUTE_NAMES.LANDING} />
      </Switch>
    </AuthLayout>
  );
};
