import { MoneyWhereInput } from "./MoneyWhereInput";
import { MoneyOrderByInput } from "./MoneyOrderByInput";

export type MoneyFindManyArgs = {
  where?: MoneyWhereInput;
  orderBy?: Array<MoneyOrderByInput>;
  skip?: number;
  take?: number;
};
