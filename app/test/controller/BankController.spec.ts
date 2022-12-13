import { expect, describe, assertType, vi, afterEach, it } from 'vitest';

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

	describe('fetch balances from 2 different banks with the same account number', async () => {
		const balances = await bankController.fetchAllBalances(1);

		it('should return 2 account balances', () => {
			expect(balances.length).toBe(2);
		});

		it('should have the same account number', () => {
			expect(balances[0].getAccountNumber()).toBe(1);
			expect(balances[1].getAccountNumber()).toBe(1);
		});

		it('should have different bank codes', () => {
			expect(balances[0].getBankCode()).not.toBe(balances[1].getBankCode());
		});

		it('should be BankAccountBalances', () => {
			assertType<Array<BankAccountBalance>>(balances);
		});
	});

	describe('print to the console balances pulled from the 2 bank integrations', () => {
		const fetchAllBalancesSpy = vi.spyOn(bankController, 'fetchAllBalances');
		const consoleSpy = vi.spyOn(console, 'log');

		it('should fetch balances before print it', async () => {
			await bankController.printBalances();
			expect(fetchAllBalancesSpy).toHaveBeenCalledOnce();
		});

		it('should print 2 balances', async () => {
			await bankController.printBalances();
			expect(consoleSpy).toHaveBeenCalledTimes(2);
		});
	})
});

describe('pulls transactions from all bank integrations and print it', () => {

	describe('fetch all transactions from 2 different banks, with the same account number and given dates', async () => {
		const arrayOfTransactions = await bankController.fetchAllTransactions(1, new Date('2022-01-01'), new Date());

		const bank1Transactions = arrayOfTransactions
			.flatMap(transactions => transactions)
			.filter(transaction => transaction.getBankCode() == 1);

		const bank2Transactions = arrayOfTransactions
			.flatMap(transactions => transactions)
			.filter(transaction => transaction.getBankCode() == 2);

		it('should return 2 array of bank transactions', () => {
			expect(arrayOfTransactions.length).toBe(2);
		});

		it('should have different bank codes', () => {
			expect(bank1Transactions[0].getBankCode()).not.toEqual(bank2Transactions[0].getBankCode());
		});

		it('should be BankTransactions', () => {
			assertType<Array<BankTransaction>>(bank1Transactions);
			assertType<Array<BankTransaction>>(bank2Transactions);
		});
	});

	describe('print to the console all transactions pulled from the 2 bank integrations', () => {
		const fetchAllTransactionsSpy = vi.spyOn(bankController, 'fetchAllTransactions');
		const consoleSpy = vi.spyOn(console, 'log');

		it('should fetch transactions before print it', async () => {
			await bankController.printTransactions();
			expect(fetchAllTransactionsSpy).toHaveBeenCalledOnce();
		});

		it('should print 2 transactions arrays', async () => {
			await bankController.printTransactions();
			expect(consoleSpy).toHaveBeenCalledTimes(2);
		});
	})
});
