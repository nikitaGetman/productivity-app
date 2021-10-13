import React from "react";
import ChallengeHeader from "./components/ChallengeHeader";
import { challenges } from "@/api/challenges";
import ChallengeBody from "./components/ChallengeBody";

export const Challenge = ({ match }) => {
  const { id } = match.params;
  const challenge = challenges.find((c) => c.id === Number(id));

  return (
    <>
      <ChallengeHeader challenge={challenge} />
      <ChallengeBody challenge={challenge} />
    </>
  );
};
