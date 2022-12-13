import { BankTransactionCurrency } from "./BankTransaction";

export interface IBankAccountBalance {
  accountNumber: number;
  bankCode: number;
  amount: number;
  currency: BankTransactionCurrency | string;
};

export class BankAccountBalance {

  private accountNumber: number;
  private bankCode: number;
  private amount: number;
  private currency: BankTransactionCurrency | string;;

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

  public getCurrency(): BankTransactionCurrency | string {
    return this.currency;
  }

}
