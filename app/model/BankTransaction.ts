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
  bankCode: number;
  amount: number;
  description: string;
  currency?: BankTransactionCurrency | string;
  type: BankTransactionType;
}

export class BankTransaction {
  
  private accountNumber: number;
  private bankCode: number;
  private amount: number;
  private description: string;
  private currency: BankTransactionCurrency | string;
  private type: BankTransactionType;

  constructor(transaction: IBankTransaction) {
    this.accountNumber = transaction.accountNumber;
    this.bankCode = transaction.bankCode;
    this.type = transaction.type;
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.currency = transaction.currency || BankTransactionCurrency.USD;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public getBankCode(): number {
    return this.bankCode;
  }

  public getAmount(): number {
    return this.amount;
  }
  
  public getDescription(): string {
    return this.description;
  }
  
  public getCurrency(): BankTransactionCurrency | string {
    return this.currency;
  }

  public getType(): BankTransactionType {
    return this.type;
  }

}
