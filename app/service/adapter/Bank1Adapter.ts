import { BankIntegrationService } from '../BankIntegrationService';
import { BankTransactionType } from '../../model/BankTransaction';
import { Bank1AccountSource } from '../../../bank-integrations/bank1/integration/Bank1AccountSource';
import { BankAccountBalance } from '../../model/BankAccountBalance';

export class Bank1Adapter extends BankIntegrationService {

  constructor() {
    super();
    this.BANK_CODE = 1;
    this.bankAccountSource = new Bank1AccountSource();
  }

  public async getBalance(accountId: number): Promise<BankAccountBalance> {
    this.checkAccountId(accountId);
    const currentBalance = await this.bankAccountSource.getAccountBalance(accountId);
    const accountCurrency = await this.bankAccountSource.getAccountCurrency(accountId);

    return new BankAccountBalance({
      accountNumber: accountId,
      bankCode: this.BANK_CODE,
      amount: currentBalance,
      currency: accountCurrency
    });
  }

  public handleTransactionType(type: number): BankTransactionType {
    switch (type) {
      case 1:
        return BankTransactionType.CREDIT;
      case 2:
        return BankTransactionType.DEBIT;
      default:
        throw new Error("Unexpected transaction type: " + type);
    }
  }

}
