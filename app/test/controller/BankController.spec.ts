import { beforeAll, expect, test, describe, vi } from 'vitest';
import { BankController } from '../../controller/BankController';

const bankController = new BankController();

const getBalancesSpy = vi.spyOn(bankController, 'getBalances');
const getTransactionsSpy = vi.spyOn(bankController, 'getTransactions'); 

beforeAll(() => {
	console.log("Printing all balances and transactions pulled from bank integrations: \n");
	
	bankController.printBalances();
	bankController.printTransactions();
});

test('application runs properly', () => {
	expect(getBalancesSpy).toHaveBeenCalled();
	expect(getTransactionsSpy).toHaveBeenCalled();
});

describe('balances', () => {
	
	test('pulls balance from each bank integration', () => {



	});
});

describe('transactions', () => {

	test('pulls all transactions from each bank integration', () => {



	});
});



// deve ser testado 
//está na estrutura correta dos modelos?
// os tipos dos valores estão corretos?
// 