import React, { useEffect } from "react";
import StoreDetails from "./StoreDetails";
import { useDispatch, useSelector } from "react-redux";
import { my_store } from "../../store/reducers/storeSlice";

const MyStore = () => {
  const { store } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(my_store());
  }, [dispatch]);

  return (
    <div>
      <StoreDetails store={store} />
    </div>
  );
};

export default MyStore;
