import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsCreateInput = {
  chartType?: string | null;
  data?: InputJsonValue;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
