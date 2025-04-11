import { DateTime } from "luxon";
import { casualRelativeTime } from "ur-humanize";

export class CasualRelativeTimeValueConverter {
  toView(value: DateTime, base?: DateTime) {
    if (value && value.isValid && (!base || base.isValid)) {
      return casualRelativeTime(value, base);
    }
  }
}
