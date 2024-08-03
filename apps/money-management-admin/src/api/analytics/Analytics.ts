import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Analytics = {
  chartType: string | null;
  createdAt: Date;
  data: JsonValue;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
