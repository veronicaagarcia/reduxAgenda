import { Button, Card, TextInput, Title } from "@tremor/react";

export function ModalUserToEdit() {
	const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();
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