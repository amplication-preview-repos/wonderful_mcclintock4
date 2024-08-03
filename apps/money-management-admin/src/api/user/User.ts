import { Analytics } from "../analytics/Analytics";
import { BankAccount } from "../bankAccount/BankAccount";
import { Expense } from "../expense/Expense";
import { Money } from "../money/Money";
import { JsonValue } from "type-fest";

export type User = {
  analyticsItems?: Array<Analytics>;
  bankAccounts?: Array<BankAccount>;
  createdAt: Date;
  email: string | null;
  expenses?: Array<Expense>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  monies?: Array<Money>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
