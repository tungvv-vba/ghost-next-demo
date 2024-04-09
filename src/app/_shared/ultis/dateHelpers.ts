import dayjs, { ConfigType } from "dayjs";

export const formatDate = (date: ConfigType, format = "YYYY-MM-DD") => {
  return date ? dayjs(date).format(format) : null;
};
