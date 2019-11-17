export default {
    methods: {
        formatPoints(number) {
            var SI_POSTFIXES = ["", "K", "M", "B", "T"];
            var tier = Math.log10(Math.abs(number)) / 3 | 0;

            if(tier == 0) return number;

            var postfix = SI_POSTFIXES[tier];
            var scale = Math.pow(10, tier * 3);
            var scaled = number / scale;
            var formatted = scaled.toFixed(1) + '';

            if (/\.0$/.test(formatted))
                formatted = formatted.substr(0, formatted.length - 2);

            return formatted + postfix;
        }
    }
}
