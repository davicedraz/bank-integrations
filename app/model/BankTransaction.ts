export enum BankTransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

export enum BankTransactionCurrency {
  USD = 'USD',
  BRL = 'BRL'
}

export interface IBankTransaction {
  accountNumber: number;
  amount: number;
  description: string;
  currency?: BankTransactionCurrency;
  type: BankTransactionType;
  createdAt?: Date;
}

export class BankTransaction {
  private accountNumber: number;
  private amount: number;
  private description: string;
  private currency: BankTransactionCurrency;
  private type: BankTransactionType;
  private createdAt: Date;

  constructor(transaction: IBankTransaction) {
    this.accountNumber = transaction.accountNumber;
    this.type = transaction.type;
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.currency = transaction.currency || BankTransactionCurrency.USD;
    this.createdAt = transaction.createdAt || new Date();
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public getAmount(): number {
    return this.amount;
  }
  
  public getDescription(): string {
    return this.description;
  }
  
  public getCurrency(): BankTransactionCurrency {
    return this.currency;
  }

  public getType(): BankTransactionType {
    return this.type;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

}
