import { Bank1AccountSource } from "../../bank-integrations/bank1/integration/Bank1AccountSource"
import { Bank2AccountSource } from "../../bank-integrations/bank2/integration/Bank2AccountSource"

/**
 * Controller that pulls information form multiple bank integrations and prints them to the console.
*/
export class BankController {

	private bank1 = new Bank1AccountSource();
	private bank2 = new Bank2AccountSource();

	public getBalances() {
		const bank1Balance = this.bank1.getAccountBalance(1);
		const bank2Balance = this.bank2.getBalance(2);
		return [bank1Balance, bank2Balance];
	}

	public getTransactions() {
		const bank1Transactions = this.bank1.getTransactions(1, new Date('2022-01-01'), new Date('2022-02-01'))
		const bank2Transactions = this.bank2.getTransactions(2, new Date('2022-01-01'), new Date('2022-02-01'))
		return [bank1Transactions, bank2Transactions];
	}

	public printBalances() {
		const allBalances = this.getBalances();

		allBalances.forEach((balance, index) => {
			console.log({
				"bank": index + 1,
				"balance": balance
			});
		});
	}

	public printTransactions() {
		const allTransactions = this.getTransactions();

		allTransactions.forEach((transactions, index) => {
			console.log({
				"bank": index + 1,
				"transactions": transactions
			});
		});
	}

}