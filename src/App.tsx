import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { ListOfUsers } from "./components/ListOfUsers";
import { ApiUsersList } from "./components/ApiUsersList";

function App() {
	
	return (
		<div className="bg-zinc-800 h-full text-white">
			<div className="flex item center justify-center h-full">
				<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListOfUsers />}/>
					<Route path="/api-users-list" element={<ApiUsersList />}/>
					<Route path="/create-user" element={<CreateUser />}/>
					<Route path="/edit-user/:id" element={<CreateUser />}/>
				</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
