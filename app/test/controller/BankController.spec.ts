import { expect, test, describe, assertType, vi, afterEach } from 'vitest';

import { BankController } from '../../controller/BankController';
import { BankTransaction } from './../../model/BankTransaction';
import { BankAccountBalance } from '../../model/BankAccountBalance';
import { BankIntegrationServiceMock } from '../mocks/BankIntegrationService.mock';

//Mocks
const bank1ServiceMock = BankIntegrationServiceMock({ accountNumber: 1, bankCode: 1 });
const bank2ServiceMock = BankIntegrationServiceMock({ accountNumber: 1, bankCode: 2 });

// Test subject
const bankController = new BankController(bank1ServiceMock, bank2ServiceMock);

afterEach(() => {
	vi.clearAllMocks()
});

describe('pulls balance from all bank integrations and print it', () => {

	test('fetch balances from 2 different banks with the same account number', async () => {
		const balances = await bankController.fetchAllBalances(1);

		expect(balances.length).toBe(2);
		expect(balances[0].getAccountNumber()).toEqual(1);
		expect(balances[1].getAccountNumber()).toEqual(1);
		expect(balances[0].getBankCode()).not.toEqual(balances[1].getBankCode());

		assertType<Array<BankAccountBalance>>(balances);
	});

	test('print to the console balances pulled from the 2 bank integrations', async () => {
		const fetchAllBalancesSpy = vi.spyOn(bankController, 'fetchAllBalances');
		const consoleSpy = vi.spyOn(console, 'log');

		await bankController.printBalances();

		expect(fetchAllBalancesSpy).toHaveBeenCalledOnce();
		expect(consoleSpy).toHaveBeenCalledTimes(2);
	})
});

describe('pulls transactions from all bank integrations and print it', () => {

	test('fetch all transactions from 2 different banks, with the same account number and given dates', async () => {
		const arrayOfTransactions = await bankController.fetchAllTransactions(1, new Date('2022-01-01'), new Date());

		const bank1Transactions = arrayOfTransactions
			.flatMap(transactions => transactions)
			.filter(transaction => transaction.getBankCode() == 1);

		const bank2Transactions = arrayOfTransactions
			.flatMap(transactions => transactions)
			.filter(transaction => transaction.getBankCode() == 2);

		expect(arrayOfTransactions.length).toBe(2);
		expect(bank1Transactions[0].getBankCode()).not.toEqual(bank2Transactions[0].getBankCode());

		assertType<Array<BankTransaction>>(bank1Transactions);
		assertType<Array<BankTransaction>>(bank2Transactions);
	});

	test('print to the console all transactions pulled from the 2 bank integrations', async () => {
		const fetchAllTransactionsSpy = vi.spyOn(bankController, 'fetchAllTransactions');
		const consoleSpy = vi.spyOn(console, 'log');

		await bankController.printTransactions();

		expect(fetchAllTransactionsSpy).toHaveBeenCalledOnce();
		expect(consoleSpy).toHaveBeenCalledTimes(2);
	})
});
