import { DateTime } from "luxon";

export type Kind = "short" | "med";

const map: { [kind in Kind]: Intl.DateTimeFormatOptions } = {
  short: DateTime.DATETIME_SHORT,
  med: DateTime.DATETIME_MED,
};

export class LocalDateTimeValueConverter {
  toView(value: DateTime, kind?: Kind) {
    if (value && value.isValid) {
      let format = map[kind || "med"];
      return value.toLocal().toLocaleString(format);
    }
  }
}
