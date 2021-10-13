// import client from "@/http/client";
import { challenges } from "@/api/challenges";

class ChallengesService {
  // implementation of refresh tokens
  fetchAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(challenges);
      }, 1500);
    });
  }

  fetchByCategory(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = challenges;
        if (category === "active")
          result = challenges.filter((c) => c.isStarted);
        if (category === "liked") result = challenges.filter((c) => c.isLiked);
        resolve(result);
      }, 1500);
    });
  }

  fetchById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...challenges].find((c) => Number(c.id) === Number(id)));
      }, 1500);
    });
  }
}

export default new ChallengesService();
