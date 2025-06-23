import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

// Step 1: create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Step 2: apply middleware to store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Step 3: run saga
sagaMiddleware.run(productSaga);

export default store;
