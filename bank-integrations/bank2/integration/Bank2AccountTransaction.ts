/**
 * Transpiled from original code written in Java by Par Renyard on 5/12/21.
 * Typescript version by Davi Cedraz on 11/12/2022.
 */
enum TRANSACTION_TYPES {
	DEBIT,
	CREDIT
}

export class Bank2AccountTransaction {

	public static TRANSACTION_TYPES = TRANSACTION_TYPES

	private amount: number;
	private type: TRANSACTION_TYPES;
	private text: string;

	constructor(amount: number, type: TRANSACTION_TYPES, text: string) {
		this.amount = amount;
		this.type = type;
		this.text = text;
	}

	public getAmount(): number{
		return this.amount;
	}

	public getType(): TRANSACTION_TYPES {
		return this.type;
	}

	public getText(): string {
		return this.text;
	}

}
