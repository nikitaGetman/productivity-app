import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Statistic from "./components/Statistic";
import { CATEGORIES } from "@/constants/categories";

export const Profile = () => {
  const user = {
    name: "Никита",
    surname: "Гетьман",
    avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
  };
  const data = {
    totalDays: 21,
    detailed: {
      [CATEGORIES.ENGLISH_LANGUAGE]: 5,
      [CATEGORIES.FINANCES]: 7,
      [CATEGORIES.MENTAL_HEALTH]: 10,
    },
  };

  return (
    <>
      <ProfileHeader user={user} />
      <Statistic data={data} />
    </>
  );
};
