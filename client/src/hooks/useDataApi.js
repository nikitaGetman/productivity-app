import { useEffect, useReducer } from "react";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (callback, params, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });

    try {
      const result = await callback(params);

      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      // cancel request
    };
  }, [callback, params]);

  return [state, fetchData];
};

export default useDataApi;

// USEFUL HOOKS:
/*
    useCopyClipboard
    useDebounce
    useThrottle
    usePrevious
    useWindowScroll
    useWindowSize
    useLockBodyScroll
    useOnClickOutside
    useNotification
    useAdjustColor
*/
