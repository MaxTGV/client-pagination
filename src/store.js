import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { usersReducer } from "./state/usersReducer";

const middleware = [thunk, logger];

export const store = createStore(usersReducer, applyMiddleware(...middleware));
