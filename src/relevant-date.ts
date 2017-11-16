import * as moment from 'moment';

import { Moment } from 'moment';

export class RelevantDateValueConverter {
    toView(value: Moment) {
        if (value != null && value.isValid()) {
            let localNow = moment();
            let localValue = moment(value).local()

            // https://github.com/moment/moment/blob/master/src/lib/moment/calendar.js#L8
            if (Math.abs(localValue.diff(localNow, 'day', true)) < 6) {
                return localValue.calendar(localNow);
            }
            else if (localValue.isSame(localValue, 'day')) {
                // With date, without time.
                return localValue.format('ll');
            }
            else {
                // With date, with time.
                return localValue.format('lll');
            }
        }
        return null;
    }
}