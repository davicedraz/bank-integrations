import {assertType, expect, test} from 'vitest';

import { BankAccountBalance } from '../../model/BankAccountBalance';
import { BankTransactionCurrency } from '../../model/BankTransaction';

test('create a new instance of BankAccountBallance with all required properties', () =>{
  const balance = new BankAccountBalance({
    accountNumber: 1, 
    bankCode: 1,
    amount: 1000,
    currency: BankTransactionCurrency.USD,
  });

  const amount = balance.getAmount();
  const currency = balance.getCurrency();
  const bankCode = balance.getBankCode();

  expect(balance).toBeInstanceOf(BankAccountBalance);
  expect(amount).toBe(1000);
  expect(currency).toBe("USD");

  assertType<number>(bankCode);
  assertType<number>(amount);
  assertType<string>(currency);
})
