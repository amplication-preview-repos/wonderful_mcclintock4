import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BankAccountUpdateInput = {
  accountNumber?: string | null;
  bankName?: string | null;
  user?: UserWhereUniqueInput | null;
};
