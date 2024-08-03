import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
