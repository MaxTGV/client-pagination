import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { imagesReducer } from "./state/imagesReducer";

const middleware = [thunk, logger];

export const store = createStore(imagesReducer, applyMiddleware(...middleware));
