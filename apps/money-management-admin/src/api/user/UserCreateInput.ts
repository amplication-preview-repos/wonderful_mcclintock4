import { AnalyticsCreateNestedManyWithoutUsersInput } from "./AnalyticsCreateNestedManyWithoutUsersInput";
import { BankAccountCreateNestedManyWithoutUsersInput } from "./BankAccountCreateNestedManyWithoutUsersInput";
import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { MoneyCreateNestedManyWithoutUsersInput } from "./MoneyCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  analyticsItems?: AnalyticsCreateNestedManyWithoutUsersInput;
  bankAccounts?: BankAccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  monies?: MoneyCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
