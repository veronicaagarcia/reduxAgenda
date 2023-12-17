import { IdUser, createUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, lastName, email, github }) => {
		dispatch(createUser({ name, lastName, email, github }));
	};

	const deleteUser = (id: IdUser) => {
		dispatch(deleteUserById(id));
	};

	return { addUser, deleteUser };
};
