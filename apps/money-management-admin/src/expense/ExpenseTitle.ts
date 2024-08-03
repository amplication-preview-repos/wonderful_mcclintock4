import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "category";

export const ExpenseTitle = (record: TExpense): string => {
  return record.category?.toString() || String(record.id);
};
