import { faker } from "@faker-js/faker";

export interface User {
	id: string;
	name: string;
	lastItemPrice: string;
	lastItemName: string;
	total: string;
	status: string;
	time: string;
	email: string;
}

export const getUsers = (count: number): Array<User> => {
	const users: Array<User> = [];
	const timeOptions: Array<string> = ["h", "min", "d"];

	for (let i = 0; i < count; i++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		users.push({
			id: faker.datatype.uuid(),
			name: firstName + " " + lastName,
			lastItemPrice: faker.commerce.price(50, 250, 2, "$"),
			lastItemName:
				faker.commerce.productAdjective() + " " + faker.commerce.product(),
			total: faker.finance.amount(5, 2500, 2, "$"),
			status: faker.helpers.arrayElement(["On Hold", "Processing", "Completed"]),
			time: `${~~(Math.random() * 10) + 1}${
				timeOptions[~~(Math.random() * timeOptions.length)]
			} ago`,
			email: faker.internet.email(firstName, lastName)
		});
	}

	return users;
};
