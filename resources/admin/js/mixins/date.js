import moment from 'moment';

export default {
    filters: {
        formatDate(str, format = null, outputFormat = 'YYYY-MM-DD HH:mm') {
            if (format == null) {
                return moment(str).format(outputFormat);
            }

            return moment(str, format).format(outputFormat);
        },
        diffForHumans(str) {
            return moment(str).from(moment());
        },
    },
}
