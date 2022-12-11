export enum BankTransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

export interface IBankTransaction {
  amount: number;
  currency?: string;
  description: string;
  type: BankTransactionType;
}

export class BankTransaction {
  private amount: number;
  private currency: string;
  private description: string;
  private type: BankTransactionType;

  constructor(transaction: IBankTransaction) {
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.type = transaction.type;
    this.currency = transaction.currency || "USD";
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getDescription(): string {
    return this.description;
  }

  public getType(): BankTransactionType {
    return this.type;
  }

}