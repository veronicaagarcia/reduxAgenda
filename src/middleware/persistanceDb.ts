import { type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const persistanceDb: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	next(action);

	if (type === "users/deleteUserById") {
		fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) {
					toast.success(`user id: '${payload}' deleted correctly`);
				}
			})
			.catch(() => {
				console.log("error");
			});
	}

	if (type === "users/createUser") {
		fetch("https://jsonplaceholder.typicode.com/users/", {
			method: "POST",
		})
			.then((res) => {
				console.log(payload, "aca");
				if (res.ok) {
					toast.success("user created correctly");
				}
			})
			.catch(() => {
				console.log("error");
			});
	}
};
