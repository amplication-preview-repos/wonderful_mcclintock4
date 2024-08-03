import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "bankName";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.bankName?.toString() || String(record.id);
};
