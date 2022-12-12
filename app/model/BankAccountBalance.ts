import { BankTransactionCurrency } from "./BankTransaction";

export interface IBankAccountBalance {
  total: number;
  accountNumber: number;
  currency: BankTransactionCurrency;
};

export class BankAccountBalance {
  private accountNumber: number;
  private total: number;
  private currency: BankTransactionCurrency;

  constructor(balance: IBankAccountBalance) {
    this.total = balance.total;
    this.currency = balance.currency;
    this.accountNumber = balance.accountNumber;
  }

  public getTotal(): number {
    return this.total;
  }

  public getCurrency(): BankTransactionCurrency {
    return this.currency;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

}
