import { DateTime } from "luxon";
import { casualTimeAgo } from "ur-humanize";

export class CasualTimeAgoValueConverter {
  toView(value: DateTime, base?: DateTime) {
    if (value && value.isValid && (!base || base.isValid)) {
      return casualTimeAgo(value, base);
    }
  }
}
