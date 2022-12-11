import { v4 as uuidv4 } from 'uuid';

export interface IBankAccountBalance {
  total: number;
  bankId?: string;
  currency?: string;
};

export class BankAccountBalance {
  private bankId: string;
  private total: number;
  private currency: string;

  constructor(balance: IBankAccountBalance) {
    this.total = balance.total;
    this.currency = balance.currency || "USD";
    this.bankId = balance.bankId || uuidv4();
  }

  public getTotal(): number {
    return this.total;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getBankId(): string {
    return this.bankId;
  }

}
