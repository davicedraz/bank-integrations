import { expect, test } from 'vitest';
import { BankTransaction, BankTransactionType } from './../../model/BankTransaction';

test('create a new instance of BankTransaction with all needed properties', () => {
  const transaction = new BankTransaction({
    amount: 500,
    description: 'Debit card purchase',
    type: BankTransactionType.DEBIT,
    createdAt: new Date()
  });

  expect(transaction).toBeInstanceOf(BankTransaction);
  expect(transaction.getAmount()).toEqual(500);
  expect(transaction.getCurrency()).toEqual("USD");
  expect(transaction.getType()).toEqual("DEBIT")
})