/**
 * Transpiled from original code written in Java by Par Renyard on 5/12/21.
 * Typescript version by Davi Cedraz on 11/12/2022.
 */
export class Bank1Transaction {

	public static TYPE_CREDIT= 1;
	public static TYPE_DEBIT = 2;

	private amount: number;
	private type: number;
	private text: string;

	constructor(amount: number, type: number, text: string) {
		this.amount = amount;
		this.type = type;
		this.text = text;
	}

	public getAmount(): number {
		return this.amount;
	}

	public getType(): number {
		return this.type;
	}

	public getText(): string {
		return this.text;
	}

}
