export enum BankTransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

export interface IBankTransaction {
  accountNumber: number;
  amount: number;
  currency?: string;
  description: string;
  type: BankTransactionType;
  createdAt?: Date;
}

export class BankTransaction {
  private accountNumber: number;
  private amount: number;
  private currency: string;
  private description: string;
  private type: BankTransactionType;
  private createdAt: Date;

  constructor(transaction: IBankTransaction) {
    this.accountNumber = transaction.accountNumber;
    this.type = transaction.type;
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.currency = transaction.currency || "USD";
    this.createdAt = transaction.createdAt || new Date();
  }

  public getAccountNumber(): number {
    return this.accountNumber;
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
