import { IBankIntegrationService } from '../service/BankIntegrationService';

/**
 * Controller that pulls information form multiple bank integrations and prints them to the console.
*/
export class BankController {

	constructor(private bank1Service: IBankIntegrationService, private bank2Service: IBankIntegrationService) {
		this.bank1Service = bank1Service;
		this.bank2Service = bank2Service;
	}

	public async printBalances() {
		await Promise.all([
			this.bank1Service.getBalance(1),
			this.bank2Service.getBalance(2)
		]).then(results => {
			results.map((balance => console.log(balance)));
		});
	}

	public async printTransactions() {
		const fromDate = new Date('2022-01-01')
		const toDate = new Date(); //now

		await Promise.all([
			this.bank1Service.getTransactions(1, fromDate, toDate),
			this.bank2Service.getTransactions(2, fromDate, toDate)
		]).then(results => {
			results.map((transactions => console.log(transactions)));
		});
	}

}
