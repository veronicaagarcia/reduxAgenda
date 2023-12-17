import { configureStore } from "@reduxjs/toolkit";
import { persistanceDb } from "../middleware/persistanceDb";
import { persistanceMiddleware } from "../middleware/persistanceMiddleware";
import { usersSlice } from "./users/slice";

export const store = configureStore({
	reducer: {
		users: usersSlice.reducer,
	},
	middleware: () => {
		return [persistanceMiddleware, persistanceDb];
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
