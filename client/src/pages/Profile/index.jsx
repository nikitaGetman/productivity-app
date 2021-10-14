import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Statistic from "./components/Statistic";
import { CATEGORIES } from "@/constants/categories";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user } = useSelector((store) => store.auth);

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
