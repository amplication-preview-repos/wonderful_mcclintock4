import { User } from "../user/User";

export type Money = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
