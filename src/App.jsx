import { useEffect } from "react";
import Router from "./router/Router";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "./store/reducers/authSlice";

function App() {
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.auth);
  console.log("authCheck:", authChecked);

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  if (!authChecked) {
    return <div>Loading...</div>;
  }
  return <Router />;
}

export default App;
