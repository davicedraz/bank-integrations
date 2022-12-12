import { assertType, expect, test } from 'vitest';
import { BankTransaction, BankTransactionType } from './../../model/BankTransaction';

test('create a new instance of BankTransaction with all needed properties', () => {
  const transaction = new BankTransaction({
    bankId: 2,
    amount: 500,
    description: 'Debit card purchase',
    type: BankTransactionType.DEBIT,
    createdAt: new Date()
  });

  const bankId = transaction.getBankId();
  const description = transaction.getDescription();

  expect(transaction).toBeInstanceOf(BankTransaction);
  expect(bankId).toEqual(2);
  expect(transaction.getAmount()).toEqual(500);
  expect(transaction.getCurrency()).toEqual("USD");
  expect(transaction.getType()).toEqual("DEBIT")

  assertType<string>(description);
  assertType<number>(bankId);
  assertType<Date>(transaction.getCreatedAt());
})