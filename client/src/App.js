import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { restoreSessionAction } from "@/store/reducers/auth/asyncActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreSessionAction());
  });

  return <AppRouter />;
}

export default App;
