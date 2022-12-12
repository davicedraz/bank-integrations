import { BankAccountBalance } from '../model/BankAccountBalance';
import { BankTransaction, BankTransactionType } from '../model/BankTransaction';

export interface IBankIntegrationService {
  getBalance(bankId: number): Promise<BankAccountBalance>;
  getTransactions(accountId: number, from: Date, to?: Date): Promise<BankTransaction[]>;
}

export class BankIntegrationService implements IBankIntegrationService {

  protected bankAccountSource: any;

  public async getTransactions(accountId: number, from: Date, to?: Date): Promise<BankTransaction[]> {
    this.checkAccountId(accountId);
    const transactions = await this.bankAccountSource.getTransactions(accountId, from, to || new Date());

    return transactions.map(((transaction: any) => {
      const transactionType = this.handleTransactionType(transaction.getType());

      return new BankTransaction({
        accountNumber: accountId,
        amount: transaction.getAmount(),
        description: transaction.getText(),
        type: transactionType
      });
    }));
  }

  public async getBalance(accountId: number): Promise<BankAccountBalance> {
    throw new Error("getBalance method implementation is required");
  }

  protected handleTransactionType(type: number): BankTransactionType {
    throw new Error("handleTransactionType method implementation is required");
  }

  protected checkAccountId(accountId: number) {
    if (!accountId || typeof accountId !== "number") {
      throw new Error("accountId is required and must be a number");
    }
  }
}