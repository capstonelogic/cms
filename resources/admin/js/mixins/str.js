export default {
    methods: {
        queryString(params) {
            return Object.keys(params).map(function(key) {
                return key + '=' + params[key]
            }).join('&');
        }
    }
}
