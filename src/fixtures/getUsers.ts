import { faker } from "@faker-js/faker";

export interface User {
	id: string;
	name: string;
	total: string;
	status: string;
	country: string;
	email: string;
}

export const getUsers = (count: number): Array<User> => {
	const users: Array<User> = [];

	for (let i = 0; i < count; i++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		users.push({
			id: faker.datatype.uuid(),
			name: firstName + " " + lastName,
			total: faker.finance.amount(5, 2500, 2, "$"),
			status: faker.helpers.arrayElement(["On Hold", "Processing", "Completed"]),
			country: faker.address.country(),
			email: faker.internet.email(firstName, lastName)
		});
	}

	return users;
};
