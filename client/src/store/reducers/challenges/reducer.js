const initialState = {
  challenges: [],
  challengesByCategories: {},
  error: "",
  isLoading: false,
};

export const CHALLENGES_ACTIONS = {
  SET_IS_LOADING: "SET_CHALLENGES_IS_LOADING",
  SET_ERROR: "SET_CHALLENGES_ERROR",
  SET_CHALLENGES: "SET_CHALLENGES",
  SET_CHALLENGES_BY_CATEGORY: "SET_CHALLENGES_BY_CATEGORY",
};

export const challengesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHALLENGES_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case CHALLENGES_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case CHALLENGES_ACTIONS.SET_CHALLENGES:
      return { ...state, challenges: [...state.challenges, ...action.payload] };
    case CHALLENGES_ACTIONS.SET_CHALLENGES_BY_CATEGORY:
      return {
        ...state,
        challengesByCategories: {
          ...state.challengesByCategories,
          [action.payload.category]: action.payload.data,
        },
      };
    default:
      return state;
  }
};
