import { assertType, expect, test } from 'vitest';
import { BankTransaction, BankTransactionType } from './../../model/BankTransaction';

test('create a new instance of BankTransaction with all required properties', () => {
  const transaction = new BankTransaction({
    accountNumber: 1,
    bankCode: 2,
    amount: 500,
    description: 'Debit card purchase',
    type: BankTransactionType.DEBIT
  });

  const bankCode = transaction.getBankCode();
  const description = transaction.getDescription();

  expect(transaction).toBeInstanceOf(BankTransaction);
  expect(bankCode).toEqual(2);
  expect(transaction.getAmount()).toEqual(500);
  expect(transaction.getCurrency()).toEqual("USD");
  expect(transaction.getType()).toEqual("DEBIT")

  assertType<string>(description);
  assertType<number>(bankCode);
})
