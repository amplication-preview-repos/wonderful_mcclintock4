import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MoneyWhereInput = {
  amount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
