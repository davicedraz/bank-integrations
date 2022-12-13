import { BankTransaction } from '../model/BankTransaction';
import { BankAccountBalance } from '../model/BankAccountBalance';
import { IBankIntegrationService } from '../service/BankIntegrationService';

/**
 * Controller that pulls information form multiple bank integrations and prints them to the console.
*/
export class BankController {

	private fromDate: Date;
	private toDate: Date;
	private accountNumber: number;

	constructor(private bank1Service: IBankIntegrationService, private bank2Service: IBankIntegrationService) {
		this.bank1Service = bank1Service;
		this.bank2Service = bank2Service;

		this.accountNumber = parseInt(process.env.ACCOUNT_NUMBER || '');
		this.fromDate = new Date(process.env.FETCH_TRANSACTIONS_FROM_DATE || '');
		this.toDate = new Date(process.env.FETCH_TRANSACTIONS_TO_DATE || '');
	}

	public async printBalances() {
		const balances = await this.fetchAllBalances(this.accountNumber);
		balances.forEach((balance => console.log(balance)));
	}

	public async printTransactions() {
		const transactions = await this.fetchAllTransactions(this.accountNumber, this.fromDate, this.toDate);
		transactions.forEach((transactions => console.log(transactions)));
	}

	public fetchAllBalances(accountNumber: number): Promise<BankAccountBalance[]> {
		return Promise.all([
			this.bank1Service.getBalance(accountNumber),
			this.bank2Service.getBalance(accountNumber)
		]);
	}

	public fetchAllTransactions(accountNumber: number, from: Date, to: Date): Promise<BankTransaction[][]> {
		return Promise.all([
			this.bank1Service.getTransactions(accountNumber, from, to),
			this.bank2Service.getTransactions(accountNumber, from, to)
		]);
	}

}
