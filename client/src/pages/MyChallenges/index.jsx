import ChallengeList from "@/components/ChallengeList";
import Tabs from "@/components/Tabs";
import Title from "@/components/Title";
import { fetchChallengesByCategory } from "@/store/reducers/challenges/asyncActions";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const tabs = [
  { value: "active", text: "Текущие" },
  { value: "liked", text: "Избранные" },
  { value: "finished", text: "Выполненные" },
];

export const MyChallenges = () => {
  const [tab, setTab] = useState(tabs[0].value);
  const { challengesByCategories, isLoading } = useSelector(
    (state) => state.challenges
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!challengesByCategories[tab]?.length) {
      dispatch(fetchChallengesByCategory(tab));
    }
  }, [tab]);

  return (
    <>
      <Title sticky>Мои марафоны</Title>
      <Tabs tabs={tabs} current={tab} onChange={(value) => setTab(value)} />
      <ChallengeList
        items={challengesByCategories[tab] || []}
        loading={isLoading}
      />
    </>
  );
};
