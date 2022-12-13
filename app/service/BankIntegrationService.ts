import { BankAccountBalance } from '../model/BankAccountBalance';
import { BankTransaction, BankTransactionType } from '../model/BankTransaction';

export interface IBankIntegrationService {
  getBalance(bankId: number): Promise<BankAccountBalance>;
  getTransactions(accountId: number, from: Date, to?: Date): Promise<BankTransaction[]>;
  handleTransactionType(type: number): BankTransactionType;
}

export abstract class BankIntegrationService implements IBankIntegrationService {

  public BANK_CODE: number = 999;

  constructor(protected bankAccountSource: any) {
    this.bankAccountSource = bankAccountSource;
  }

  public async getTransactions(accountId: number, from: Date, to?: Date): Promise<BankTransaction[]> {
    const transactions = await this.bankAccountSource.getTransactions(accountId, from, to || new Date());

    return transactions.map(((transaction: any) => {
      const transactionType = this.handleTransactionType(transaction.getType());

      return new BankTransaction({
        accountNumber: accountId,
        bankCode: this.BANK_CODE,
        amount: transaction.getAmount(),
        description: transaction.getText(),
        type: transactionType
      });
    }));
  }

  public async getBalance(accountId: number): Promise<BankAccountBalance> {
    throw new Error("getBalance method implementation is required");
  }

  public handleTransactionType(type: number): BankTransactionType {
    throw new Error("handleTransactionType method implementation is required");
  }

}
