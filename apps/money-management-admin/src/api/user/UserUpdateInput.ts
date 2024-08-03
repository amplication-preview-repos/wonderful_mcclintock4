import { AnalyticsUpdateManyWithoutUsersInput } from "./AnalyticsUpdateManyWithoutUsersInput";
import { BankAccountUpdateManyWithoutUsersInput } from "./BankAccountUpdateManyWithoutUsersInput";
import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import { MoneyUpdateManyWithoutUsersInput } from "./MoneyUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  analyticsItems?: AnalyticsUpdateManyWithoutUsersInput;
  bankAccounts?: BankAccountUpdateManyWithoutUsersInput;
  email?: string | null;
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  monies?: MoneyUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
