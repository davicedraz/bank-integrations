import {expect, test} from 'vitest';
import { BankAccountBalance } from '../../model/BankAccountBalance';

test('create a new instance of BankAccountBallance with all needed properties', () =>{
  const balance = new BankAccountBalance({total: 1000});

  expect(balance).toBeInstanceOf(BankAccountBalance);
  expect(balance.getTotal()).toEqual(1000);
  expect(balance.getCurrency()).toEqual("USD");
  expect(balance.getBankId()).not.toBeUndefined()
})