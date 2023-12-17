import { Toaster } from "sonner";
import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	return (
		<>
			<h1 style={{ marginBottom: "16px", color: "tomato", fontWeight: "bold" }}>Agenda</h1>
			<ListOfUsers />
			<CreateUser />
			<Toaster richColors />
		</>
	);
}

export default App;
