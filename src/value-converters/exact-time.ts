import { DateTime } from "luxon";
import { exactTime } from "ur-humanize";

export class ExactTimeValueConverter {
  toView(value: DateTime, includeSeconds?: boolean) {
    if (value && value.isValid) {
      return exactTime(value, includeSeconds);
    }
  }
}
