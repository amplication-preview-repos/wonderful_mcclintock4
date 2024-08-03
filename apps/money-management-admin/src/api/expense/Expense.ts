import { User } from "../user/User";

export type Expense = {
  amount: number | null;
  category: string | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
