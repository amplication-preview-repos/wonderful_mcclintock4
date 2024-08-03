import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { BankAccountListRelationFilter } from "../bankAccount/BankAccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MoneyListRelationFilter } from "../money/MoneyListRelationFilter";

export type UserWhereInput = {
  analyticsItems?: AnalyticsListRelationFilter;
  bankAccounts?: BankAccountListRelationFilter;
  email?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  monies?: MoneyListRelationFilter;
  username?: StringFilter;
};
