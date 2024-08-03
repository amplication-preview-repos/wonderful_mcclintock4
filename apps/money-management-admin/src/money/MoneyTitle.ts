import { Money as TMoney } from "../api/money/Money";

export const MONEY_TITLE_FIELD = "currency";

export const MoneyTitle = (record: TMoney): string => {
  return record.currency?.toString() || String(record.id);
};
