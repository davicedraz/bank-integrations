import { BankIntegrationService } from '../BankIntegrationService';
import { BankTransactionType } from '../../model/BankTransaction';
import { Bank2AccountSource } from '../../../bank-integrations/bank2/integration/Bank2AccountSource';
import { BankAccountBalance } from '../../model/BankAccountBalance';

export class Bank2Adapter extends BankIntegrationService {

  constructor(protected bankAccountSource: Bank2AccountSource) {
    super(bankAccountSource);
    this.BANK_CODE = 2;
  }

  public async getBalance(accountId: number): Promise<BankAccountBalance> {
    const currentBalance = await this.bankAccountSource.getBalance(accountId);

    return new BankAccountBalance({
      accountNumber: accountId,
      bankCode: this.BANK_CODE,
      amount: currentBalance.getBalance(),
      currency: currentBalance.getCurrency()
    });
  }

  public handleTransactionType(type: number): BankTransactionType {
    switch (type) {
      case 0:
        return BankTransactionType.DEBIT;
      case 1:
        return BankTransactionType.CREDIT;
      default:
        throw new Error(`Unexpected transaction type: (${type})`);
    }
  }

}
