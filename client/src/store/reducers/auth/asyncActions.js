import authService from "@/services/auth";
import { AUTH_ACTIONS } from "./reducer";

export const loginAction =
  ({ login, password, sync }) =>
  async (dispatch) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_IS_LOADING, payload: true });
      const user = await authService.login({
        login,
        password,
        isTokensSync: sync,
      });
      dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
    } catch (e) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: e.message });
    } finally {
      dispatch({ type: AUTH_ACTIONS.SET_IS_LOADING, payload: false });
    }
  };

export const logoutAction = () => async (dispatch) => {
  try {
    await authService.logout();
    dispatch({ type: AUTH_ACTIONS.SET_USER, payload: null });
  } catch (e) {
    window.location.reload();
  }
};

export const restoreSessionAction = () => async (dispatch) => {
  try {
    if (authService.hasAuthTokens()) {
      dispatch({ type: AUTH_ACTIONS.SET_IS_LOADING, payload: true });
      const user = await authService.restoreUser();
      dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
    }
  } catch (e) {
    authService.removeAuthTokens();
    dispatch({ type: AUTH_ACTIONS.SET_USER, payload: null });
  } finally {
    dispatch({ type: AUTH_ACTIONS.SET_IS_LOADING, payload: false });
  }
};
