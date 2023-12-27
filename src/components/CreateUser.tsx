import { Badge, Button, Card, TextInput } from "@tremor/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, editUserById } from "../store/users/slice"
import { Footer } from "./common/Footer";

export function CreateUser() {

	const [result, setResult] = useState<"ok" | "wrong" | null>(null);
	const [user, setUser] = useState({
		name:"",
		lastName:"",
		email:"",
		github:""
	})
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()
	const users = useSelector(state => state.users)

	const handleChange = (e) => {
		setUser({...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		setResult(null);
		const form = event.target;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const lastName = formData.get("lastName") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;
		if (!name || !lastName || !email || !github) {
			return setResult("wrong");
		}

		if (params.id) {
			dispatch(editUserById(user))
		} else {
			dispatch(createUser(user));
		}
		setResult("ok");
		form.reset();
		navigate('/')
	};

	useEffect(()=>{
		if(params.id){
			setUser( users.find(user => user.id === params.id))
		}
	}, [])

	return (
		<div className="w-4/6 h-screen mt-8">
		<Card className="mt-8 rounded-2xl mb-8">
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Peter" value={user.name} onChange={handleChange}/>
				<TextInput name="lastName" placeholder="Smith" value={user.lastName} onChange={handleChange}/>
				<TextInput name="email" placeholder="peter@email.com" value={user.email} onChange={handleChange}/>
				<TextInput name="github" placeholder="@github" value={user.github}  onChange={handleChange}/>
				<div className="flex justify-center">
					<Button type="submit" className="mt-8 bg-lime-600 hover:bg-lime-800 text-white p-3 rounded-2xl border-none text-xl">
						Save contact
					</Button>
				</div>
					<span>
						{result === "ok" && <Badge style={{ color: "green" }}>Saved correctly</Badge>}
						{result === "wrong" && <Badge style={{ color: "red" }}>Error. You must complete all the fields</Badge>}
					</span>
			</form>
		</Card>
		<Footer />
		</div>
	);
}
