import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MoneyUpdateInput = {
  amount?: number | null;
  currency?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
