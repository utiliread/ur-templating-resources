import {Moment, utc} from 'moment';


export class RelevantDateValueConverter {
    toView(value: Moment) {
        if (value != null && value.isValid()) {
            let now = utc();
            // https://github.com/moment/moment/blob/master/src/lib/moment/calendar.js#L8
            if (Math.abs(value.diff(now, 'day', true)) < 6) {
                return value.calendar(now);
            }
            else if (value.isSame(value, 'day')) {
                // With date, without time.
                return value.format('ll');
            }
            else {
                // With date, with time.
                return value.format('lll');
            }
        }
        return null;
    }
}