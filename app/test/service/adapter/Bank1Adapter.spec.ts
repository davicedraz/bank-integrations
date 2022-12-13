import { describe, expect, it, vi } from 'vitest';

import { BankAccountBalance } from '../../../model/BankAccountBalance';
import { BankTransaction, BankTransactionType } from '../../../model/BankTransaction';
import { Bank1Adapter } from '../../../service/adapter/Bank1Adapter';
import { Bank1AccountSourceMock, Bank1TransactionTypeMock } from '../../mocks/Bank1AccountSource.mock';

// Mocks
let accountNumber = 1;
const bank1AccountSourceMock = Bank1AccountSourceMock();

// Test subject
const bank1Service = new Bank1Adapter(bank1AccountSourceMock);

describe('get current balance from bank account source and create an BankAccountBalance', async () => {
  const getBalanceSpy = vi.spyOn(bank1Service['bankAccountSource'], 'getAccountBalance');
  const getCurrencySpy = vi.spyOn(bank1Service['bankAccountSource'], 'getAccountCurrency');

  const balance = await bank1Service.getBalance(accountNumber);

  it('should get current balance and currency', () => {
    expect(getBalanceSpy).toHaveBeenCalledOnce();
    expect(getCurrencySpy).toHaveBeenCalledOnce();
    expect(balance.getAmount()).toBe(bank1AccountSourceMock.getAccountBalance(accountNumber));
    expect(balance.getCurrency()).toBe(bank1AccountSourceMock.getAccountCurrency(accountNumber));
  });

  it('should be BankAccountBalance', () => {
    expect(balance).toBeInstanceOf(BankAccountBalance);
  });

  it('should set BANK_CODE and passes to returned BankAccountBalance', () => {
    expect(balance.getBankCode()).toBe(bank1Service.BANK_CODE);
  });

});

describe('get all transactions from bank account source and create an array of BankTransactions', async () => {
  const getTransactionsSpy = vi.spyOn(bank1Service['bankAccountSource'], 'getTransactions');
  const transactions = await bank1Service.getTransactions(accountNumber, new Date('2022-01-01'));

  it('should get all transactions with expected values', () => {
    expect(getTransactionsSpy).toHaveBeenCalledOnce();
    expect(transactions[0].getAmount()).toBe(bank1AccountSourceMock.getTransactions()[0].getAmount());
    expect(transactions[0].getDescription()).toBe(bank1AccountSourceMock.getTransactions()[0].getText());
  });

  it('should map all pulled transactions to an array of BankTransaction', () => {
    transactions.forEach((transaction) => {
      expect(transaction).toBeInstanceOf(BankTransaction);
    });
  });

  it('should set BANK_CODE and passes to returned BankAccountBalance', () => {
    expect(transactions[0].getBankCode()).toBe(bank1Service.BANK_CODE);
  });

  describe('handle transaction types correctly', () => {
    it('should return BankTransactionType.CREDIT when transaction type is 1', () => {
      expect(bank1Service.handleTransactionType(Bank1TransactionTypeMock.CREDIT)) //1
        .toBe(BankTransactionType.CREDIT);
    });

    it('should return BankTransactionType.DEBIT when transaction type is 2', () => {
      expect(bank1Service.handleTransactionType(Bank1TransactionTypeMock.DEBIT)) //2
        .toBe(BankTransactionType.DEBIT);
    });

    it('should return an Error if transaction type is unknown', () => {
      expect(() => bank1Service.handleTransactionType(Bank1TransactionTypeMock.PIX)) //3
        .toThrowError('Unexpected transaction type: (3)')
    });
  });
});