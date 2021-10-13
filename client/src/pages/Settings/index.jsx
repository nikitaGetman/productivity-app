import Title from "@/components/Title";
import React from "react";
import SettingsForm from "./components/SettingsForm";

export const Settings = () => {
  const user = {};
  const handleSubmit = (data) => {
    console.log("handleSubmit", data);
  };

  return (
    <>
      <Title sticky>Настройки</Title>
      <SettingsForm user={user} onSubmit={handleSubmit} />
    </>
  );
};
