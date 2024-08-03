import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "chartType";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.chartType?.toString() || String(record.id);
};
