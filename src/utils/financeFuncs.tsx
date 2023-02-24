import { User } from "@/fixtures/getUsers";

export const totalPrice = (data: User[]): number =>
	data.reduce(
		(acc: number, curr: { total: string }) =>
			acc + Number(curr.total.replace("$", "")),
		0
	);

export const getRandomSalesData = (totalValue: number): Array<number> => {
	const numDays = 7;
	const distributedValues: number[] = Array.from({ length: numDays }, () => 0);
	let remainingValue: number =
		totalValue - distributedValues.reduce((acc, curr) => acc + curr, 0);

	while (remainingValue > 0) {
		const randomIndex = ~~(Math.random() * numDays);
		const currentValue = ~~(Math.random() * 250);
		distributedValues[randomIndex] += currentValue;
		remainingValue -= currentValue;
	}

	return distributedValues;
};
