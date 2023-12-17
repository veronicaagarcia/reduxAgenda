import { type Middleware } from "@reduxjs/toolkit";

export const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("Redux_State", JSON.stringify(store.getState()));
};
