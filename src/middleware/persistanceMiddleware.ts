export const persistanceMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("Redux_State", JSON.stringify(store.getState()));
};
