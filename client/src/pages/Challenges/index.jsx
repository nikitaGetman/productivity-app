import Title from "@/components/Title";
import React, { useEffect } from "react";
import ChallengeList from "@/components/ChallengeList";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllChallenges } from "@/store/reducers/challenges/asyncActions";

export const Challenges = () => {
  const { challenges, isLoading } = useSelector((state) => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!challenges.length) {
      dispatch(fetchAllChallenges());
    }
  }, []);

  return (
    <>
      <Title sticky>Марафоны</Title>
      <ChallengeList items={challenges} loading={isLoading} />
    </>
  );
};
