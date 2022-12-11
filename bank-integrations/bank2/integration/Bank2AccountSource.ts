import { Bank2AccountBalance } from "./Bank2AccountBalance";
import { Bank2AccountTransaction } from "./Bank2AccountTransaction";

/**
 * Transpiled from original code written in Java by Par Renyard on 5/12/21.
 * Typescript version by Davi Cedraz on 11/12/2022.
 */
export class Bank2AccountSource {

	public getBalance(accountNum: number): Bank2AccountBalance {
		return new Bank2AccountBalance(512.5, "USD");
	}

	public getTransactions(accountNum: number, fromDate: Date, toDate: Date): Array<Bank2AccountTransaction>  {
		return [
			new Bank2AccountTransaction(125, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Amazon.com"),
			new Bank2AccountTransaction(500, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Car insurance"),
			new Bank2AccountTransaction(800, Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT, "Salary")
		];
	}
}
