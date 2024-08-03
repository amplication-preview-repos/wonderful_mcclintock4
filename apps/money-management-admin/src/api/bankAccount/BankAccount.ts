import { User } from "../user/User";

export type BankAccount = {
  accountNumber: string | null;
  bankName: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
