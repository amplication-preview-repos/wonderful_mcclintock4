import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountCreateInput = {
  accountNumber?: string | null;
  bankName?: string | null;
  user?: UserWhereUniqueInput | null;
};
