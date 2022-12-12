import {assertType, expect, test} from 'vitest';
import { BankAccountBalance } from '../../model/BankAccountBalance';

test('create a new instance of BankAccountBallance with all needed properties', () =>{
  const balance = new BankAccountBalance({bankId: 1, total: 1000});

  const total = balance.getTotal();
  const currency = balance.getCurrency();
  const bankId = balance.getBankId();

  expect(balance).toBeInstanceOf(BankAccountBalance);
  expect(total).toEqual(1000);
  expect(currency).toEqual("USD");

  assertType<number>(bankId);
  assertType<number>(total);
  assertType<string>(currency);
})