import { vi } from "vitest";

export enum Bank1TransactionTypeMock {
  CREDIT = 1,
  DEBIT,
  PIX
}

export const Bank1TransactionMock = (amount, text, type) => ({
  amount: amount,
  type: type,
  text: text,
  getAmount: vi.fn((): number => amount),
  getText: vi.fn((): string => text),
  getType: vi.fn((): number => type)
});

export const Bank1AccountSourceMock = () => ({
  getAccountBalance: vi.fn((accountNumber: number) => 500),
  getAccountCurrency: vi.fn((accountNumber: number) => 'USD'),
  getTransactions: vi.fn(() => [
    Bank1TransactionMock(500, 'new car', Bank1TransactionTypeMock.CREDIT),
    Bank1TransactionMock(1000, 'new boat', Bank1TransactionTypeMock.DEBIT)
  ])
});