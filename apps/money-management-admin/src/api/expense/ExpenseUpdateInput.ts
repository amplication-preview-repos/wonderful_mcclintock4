import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: number | null;
  category?: string | null;
  date?: Date | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
