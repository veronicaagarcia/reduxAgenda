import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateUser() {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "wrong" | null>(null);

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

		addUser({ name, lastName, email, github });
		setResult("ok");
		form.reset();
	};
	return (
		<Card style={{ marginTop: "24px" }}>
			<Title>Create User</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Peter" />
				<TextInput name="lastName" placeholder="Smith" />
				<TextInput name="email" placeholder="peter@email.com" />
				<TextInput name="github" placeholder="@github" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Done
					</Button>
					<span>
						{result === "ok" && <Badge style={{ color: "green" }}>Saved correctly</Badge>}
						{result === "wrong" && <Badge style={{ color: "red" }}>Error. You must complete all the fields</Badge>}
					</span>
				</div>
			</form>
		</Card>
	);
}
