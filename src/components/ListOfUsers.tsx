import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IdUser, UserId } from "../store/users/slice";
import { deleteUserById } from "../store/users/slice";

export function ListOfUsers() {

	const users = useSelector(state => state.users)

	const dispatch = useDispatch()

	const handleDelete = (id: IdUser) => {
		dispatch(deleteUserById(id))
	}
	
	return (
		<div className="w-4/6">
		<header>
			<h1 className="mt-8 text-cyan-400 font-bold text-center text-2xl">MY AGENDA</h1>
			<Link className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 border-none rounded-2xl mt-8" to="/create-user"> Create user</Link>
			<Link className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 border-none rounded-2xl mt-8 ml-4" to="/api-users-list"> Api users list</Link>
		</header>
		<main>
			<Card className="mt-8 rounded-2xl mb-8">
				<Title className="text-center">
					Total users :
					<Badge className="ml-8 text-white bg-cyan-500 rounded-full">{users.length}</Badge>
				</Title>
				<Table className="mt-8">
					<TableHead>
						<TableRow className="underline decoration-sky-500">
							<TableHeaderCell>Avatar</TableHeaderCell>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell>LastName</TableHeaderCell>
							<TableHeaderCell>Email</TableHeaderCell>
							<TableHeaderCell>Actions</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((item:UserId) => (
							<TableRow key={item.id}>
								<TableCell>
									<img className="w-12 h-12 rounded-2xl mr-2" src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
									/>
								</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.lastName}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell className="flex justify-center">
									<Link to={`edit-user/${item.id}`} className="hover:text-cyan-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<title>Edit </title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										/>
									</svg>
									</Link>
									<button onClick={() => handleDelete(item.id)} type="button" className="hover:text-rose-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<title>Delete</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</main>
		</div>
	);
}
function state(state: unknown): unknown {
	throw new Error("Function not implemented.");
}

