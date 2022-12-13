import { BankTransactionCurrency } from "./BankTransaction";

export interface IBankAccountBalance {
  amount: number;
  bankCode: number;
  accountNumber: number;
  currency: BankTransactionCurrency;
};

export class BankAccountBalance {
  
  private accountNumber: number;
  private bankCode: number;
  private amount: number;
  private currency: BankTransactionCurrency;

  constructor(balance: IBankAccountBalance) {
    this.accountNumber = balance.accountNumber;
    this.bankCode = balance.bankCode;
    this.amount = balance.amount;
    this.currency = balance.currency;
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

  public getCurrency(): BankTransactionCurrency {
    return this.currency;
  }

}
