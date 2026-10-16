import React, { useEffect, useState } from "react";
import StoreForm from "../components/store/StoreForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { my_store } from "../../store/reducers/storeSlice";

const EditStore = () => {
  const dispatch = useDispatch();
  const { store } = useSelector((state) => state?.store);
  useEffect(() => {
    dispatch(my_store());
  }, [dispatch]);

  return (
    <div>
      <StoreForm key={store._id} store={store} />
    </div>
  );
};

export default EditStore;
