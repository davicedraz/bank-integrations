import { Bank1Transaction } from './Bank1Transaction';

/**
 * Transpiled from original code written in Java by Par Renyard on 5/12/21.
 * Typescript version by Davi Cedraz on 11/12/2022.
 */
export class Bank1AccountSource {

	public getAccountBalance(accountId: number): number {
		return 215.5;
	}
	
	public getAccountCurrency(accountId: number): string {
		return "USD";
	}

	public getTransactions(accountId: number, fromDate: Date, toDate: Date): Array<Bank1Transaction> {
		return [
			new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, "Check deposit"),
			new Bank1Transaction(25.5, Bank1Transaction.TYPE_DEBIT, "Debit card purchase"),
			new Bank1Transaction(225, Bank1Transaction.TYPE_DEBIT, "Rent payment")
		];
	}

}
