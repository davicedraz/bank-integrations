export enum BankTransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

export interface IBankTransaction {
  amount: number;
  currency?: string;
  description: string;
  type: BankTransactionType;
  createdAt: Date;
}

export class BankTransaction {
  private amount: number;
  private currency: string;
  private description: string;
  private type: BankTransactionType;
  private createdAt: Date;

  constructor(transaction: IBankTransaction) {
    this.type = transaction.type;
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.currency = transaction.currency || "USD";
    this.createdAt = transaction.createdAt || new Date();
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

  public getCreatedAt(): Date {
    return this.createdAt;
  }

}