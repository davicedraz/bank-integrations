import { BankIntegrationService } from '../BankIntegrationService';
import { BankAccountBalance } from '../../model/BankAccountBalance';
import { BankTransactionType } from '../../model/BankTransaction';
import { Bank1AccountSource } from '../../../bank-integrations/bank1/integration/Bank1AccountSource';

export class Bank1Adapter extends BankIntegrationService {

  constructor(protected bankAccountSource: Bank1AccountSource) {
    super(bankAccountSource);
    this.BANK_CODE = 1;
  }

  public async getBalance(accountNumber: number): Promise<BankAccountBalance> {
    const currentBalance = await this.bankAccountSource.getAccountBalance(accountNumber);
    const accountCurrency = await this.bankAccountSource.getAccountCurrency(accountNumber);

    return new BankAccountBalance({
      accountNumber: accountNumber,
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
