import { vi } from "vitest";

export enum Bank2TransactionTypeMock {
  DEBIT,
  CREDIT,
  PIX
}

export const Bank2TransactionMock = (amount, text, type) => ({
  amount: amount,
  type: type,
  text: text,
  getAmount: vi.fn((): number => amount),
  getText: vi.fn((): string => text),
  getType: vi.fn((): number => type)
});

export const Bank2TAccountBalanceMock = (balance, currency) => ({
  balance: balance,
  currency: currency,
  getBalance: vi.fn((): number => balance),
  getCurrency: vi.fn((): string => currency),
});

export const Bank2AccountSourceMock = () => ({
  getBalance: vi.fn((accountNumber: number) => Bank2TAccountBalanceMock(1800, 'USD')),
  getTransactions: vi.fn(() => [
    Bank2TransactionMock(500, 'new car', Bank2TransactionTypeMock.CREDIT),
    Bank2TransactionMock(2000, 'new boat', Bank2TransactionTypeMock.DEBIT)
  ])
});