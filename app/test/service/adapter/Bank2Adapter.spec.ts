import { afterEach, assertType, describe, expect, it, test, vi } from 'vitest';

import { Bank2Adapter } from '../../../service/adapter/Bank2Adapter';
import { BankTransaction, BankTransactionType } from '../../../model/BankTransaction';
import { Bank2AccountSourceMock, Bank2TransactionTypeMock } from './../../mocks/Bank2AccountSource.mock';
import { BankAccountBalance } from '../../../model/BankAccountBalance';

// Mocks
let accountNumber = 1;
const bank2AccountSourceMock = Bank2AccountSourceMock();

// Test subject
const bank2Service = new Bank2Adapter(bank2AccountSourceMock);

describe('get current balance from bank account source and create an BankAccountBalance', async () => {
  const getBalanceSpy = vi.spyOn(bank2Service['bankAccountSource'], 'getBalance');
  const balance = await bank2Service.getBalance(accountNumber);

  it('should get current balance and currency', () => {
    expect(getBalanceSpy).toHaveBeenCalledOnce();
    expect(balance.getAmount()).toBe(bank2AccountSourceMock.getBalance(accountNumber).getBalance());
    expect(balance.getCurrency()).toBe(bank2AccountSourceMock.getBalance(accountNumber).getCurrency());
  });

  it('should be BankAccountBalance', () => {
    expect(balance).toBeInstanceOf(BankAccountBalance);
  });

  it('should set BANK_CODE and passes to returned BankAccountBalance', () => {
    expect(balance.getBankCode()).toBe(bank2Service.BANK_CODE);
  });

});

describe('get all transactions from bank account source and create an array of BankTransactions', async () => {
  const getTransactionsSpy = vi.spyOn(bank2Service['bankAccountSource'], 'getTransactions');
  const transactions = await bank2Service.getTransactions(accountNumber, new Date('2022-01-01'));

  it('should get all transactions with expected values', () => {
    expect(getTransactionsSpy).toHaveBeenCalledOnce();
    expect(transactions[0].getAmount()).toBe(bank2AccountSourceMock.getTransactions()[0].getAmount());
    expect(transactions[0].getDescription()).toBe(bank2AccountSourceMock.getTransactions()[0].getText());
  });

  it('should map all pulled transactions to an array of BankTransaction', () => {
    transactions.forEach((transaction) => {
      expect(transaction).toBeInstanceOf(BankTransaction);
    });
  });

  it('should set BANK_CODE and passes to returned BankAccountBalance', () => {
    expect(transactions[0].getBankCode()).toBe(bank2Service.BANK_CODE);
  });

  describe('handle transaction types correctly', () => {
    it('should return BankTransactionType.CREDIT when transaction type is 1', () => {
      expect(bank2Service.handleTransactionType(Bank2TransactionTypeMock.CREDIT)) //0
        .toBe(BankTransactionType.CREDIT);
    });

    it('should return BankTransactionType.DEBIT when transaction type is 2', () => {
      expect(bank2Service.handleTransactionType(Bank2TransactionTypeMock.DEBIT)) //1
        .toBe(BankTransactionType.DEBIT);
    });

    it('should return an Error if transaction type is unknown', () => {
      expect(() => bank2Service.handleTransactionType(Bank2TransactionTypeMock.PIX)) //2
        .toThrowError('Unexpected transaction type: (2)')
    });
  });
});