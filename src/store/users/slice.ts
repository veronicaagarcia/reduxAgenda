import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	lastName: string;
	email: string;
	github: string;
}

export type IdUser = string;

export interface UserId extends User {
	id: IdUser;
}

const defaultState = [
	{
		id: "0",
		name: "Juampi",
		lastName: "Riglos",
		email: "JuanPabloRiglos@gmail.com",
		github: "JuanPabloRiglos",
	},
	{
		id: "1",
		name: "Peter",
		lastName: "Do",
		email: "peter@gmail.com",
		github: "peter",
	},
	{
		id: "2",
		name: "veronica",
		lastName: "Garcia",
		email: "veroagarcia90@gmail.com",
		github: "veronicaagarcia",
	},
	{
		id: "3",
		name: "Lilith",
		lastName: "Dev",
		email: "lilithd@gmail.com",
		github: "lilith",
	},
];

const initialState: UserId[] = (() => {
	const persistanceState = localStorage.getItem("Redux_State");
	if (persistanceState) {
		return JSON.parse(persistanceState).users;
	}
	return defaultState;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		createUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<IdUser>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById, createUser } = usersSlice.actions;
