import { Button, Card, TextInput, Title } from "@tremor/react";
import { useAppSelector } from "../hooks/store";

export function ModalUserToEdit() {
    const users = useAppSelector((state) => state.users);
	const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();
        console.log('que llega', users)
		// const form = event.target;
		// const formData = new FormData(form);

		// const name = formData.get("name") as string;
		// const lastName = formData.get("lastName") as string;
		// const email = formData.get("email") as string;
		// const github = formData.get("github") as string;

		// editedUser({ name, lastName, email, github });
        // modalOpenClose()
		form.reset();
	};
	return (
		<Card style={{ marginTop: "24px" }}>
			<Title>Edit User</Title>
			<form onSubmit={handleEdit}>
				<TextInput name="name" placeholder="algo" />
				<TextInput name="lastName" placeholder="Smith" />
				<TextInput name="email" placeholder="peter@email.com" />
				<TextInput name="github" placeholder="@github" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Done
					</Button>
				</div>
			</form>
		</Card>
	);
}