export interface IBankAccountBalance {
  total: number;
  accountNumber: number;
  currency?: string;
};

export class BankAccountBalance {
  private accountNumber: number;
  private total: number;
  private currency: string;

  constructor(balance: IBankAccountBalance) {
    this.total = balance.total;
    this.currency = balance.currency || "USD";
    this.accountNumber = balance.accountNumber;
  }

  public getTotal(): number {
    return this.total;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

}
