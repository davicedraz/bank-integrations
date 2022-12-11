/**
 * Transpiled from original code written in Java by Par Renyard on 5/12/21.
 * Typescript version by Davi Cedraz on 11/12/2022.
 */
export class Bank2AccountBalance {

	private balance: number;
	private currency: string;

	constructor(balance: number, currency: string) {
		this.balance = balance;
		this.currency = currency;
	}

	public getBalance(): number {
		return this.balance;
	}

	public getCurrency(): string {
		return this.currency;
	}
}
