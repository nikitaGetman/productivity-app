import challengesService from "@/services/challenges";
import { CHALLENGES_ACTIONS } from "./reducer";

export const fetchAllChallenges = () => async (dispatch) => {
  try {
    dispatch({ type: CHALLENGES_ACTIONS.SET_IS_LOADING, payload: true });
    const result = await challengesService.fetchAll();
    dispatch({ type: CHALLENGES_ACTIONS.SET_CHALLENGES, payload: result });
  } catch (e) {
    dispatch({ type: CHALLENGES_ACTIONS.SET_ERROR, payload: e.message });
  } finally {
    dispatch({ type: CHALLENGES_ACTIONS.SET_IS_LOADING, payload: false });
  }
};

export const fetchChallengesByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: CHALLENGES_ACTIONS.SET_IS_LOADING, payload: true });
    const result = await challengesService.fetchByCategory(category);
    dispatch({
      type: CHALLENGES_ACTIONS.SET_CHALLENGES_BY_CATEGORY,
      payload: { category, data: result },
    });
  } catch (e) {
    dispatch({ type: CHALLENGES_ACTIONS.SET_ERROR, payload: e.message });
  } finally {
    dispatch({ type: CHALLENGES_ACTIONS.SET_IS_LOADING, payload: false });
  }
};
