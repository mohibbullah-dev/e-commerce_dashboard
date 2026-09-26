import authSlice from "./reducers/authSlice";
import categoryReducer from "./reducers/categorySlice";

const rootReducer = {
  auth: authSlice,
  category: categoryReducer,
};
export default rootReducer;
