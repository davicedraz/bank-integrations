import { vi } from 'vitest';

import { BankAccountBalance } from '../../model/BankAccountBalance';
import { BankTransaction, BankTransactionCurrency, BankTransactionType } from '../../model/BankTransaction';

export const BankIntegrationServiceMock = ({ accountNumber, bankCode }) => ({
  getBalance: vi.fn(async () => new BankAccountBalance({
    accountNumber: accountNumber,
    bankCode: bankCode,
    amount: 500,
    currency: BankTransactionCurrency.USD
  })),

  getTransactions: vi.fn(async () => [
    new BankTransaction({
      accountNumber: accountNumber,
      bankCode: bankCode,
      amount: 500,
      description: 'New car',
      currency: BankTransactionCurrency.USD,
      type: BankTransactionType.CREDIT
    }),
    new BankTransaction({
      accountNumber: accountNumber,
      bankCode: bankCode,
      amount: 500,
      description: 'New car',
      currency: BankTransactionCurrency.USD,
      type: BankTransactionType.CREDIT
    })
  ]),
  
  handleTransactionType: vi.fn(),
});
