import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountWhereInput = {
  accountNumber?: StringNullableFilter;
  bankName?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
