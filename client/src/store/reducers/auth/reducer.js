const initialState = {
  user: {},
  isAuth: false,
  error: "",
  isLoading: false,
};

export const AUTH_ACTIONS = {
  SET_IS_LOADING: "SET_AUTH_IS_LOADING",
  SET_ERROR: "SET_AUTH_ERROR",
  SET_USER: "SET_AUTH_USER",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case AUTH_ACTIONS.SET_USER: {
      if (action.payload) {
        return { ...state, user: action.payload, isAuth: true };
      }
      return { ...state, user: {}, isAuth: false };
    }
    default:
      return state;
  }
};
