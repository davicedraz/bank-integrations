import { expect, test } from 'vitest';
import { BankController } from '../../controller/BankController';

test('first run', () => {
	const bankController = new BankController();
	const balances = bankController.getBalances();
	const transactions = bankController.getTransactions();

	expect(balances.length).toBe(2);
	expect(transactions.length).toBe(2);
	
	bankController.printBalances();
	bankController.printTransactions();
});
