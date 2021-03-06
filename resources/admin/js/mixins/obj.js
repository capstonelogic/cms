export default {
    methods: {
        objectIsEmpty(object) {
            return Object.keys(object).length === 0
        },
        isEquivalent(a, b) {
            var aProps = Object.getOwnPropertyNames(JSON.parse(JSON.stringify(a)));
            var bProps = Object.getOwnPropertyNames(JSON.parse(JSON.stringify(b)));

            if (aProps.length != bProps.length) {
                return false;
            }
        
            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }
            return true;
        },
        isEmpty(obj) {
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return JSON.stringify(obj) === JSON.stringify({});
        },
        recomposeValue(obj, string){
            var parts = string.split('.');

            var newObj = (obj.hasOwnProperty(parts[0]))
                            ? obj[parts[0]]
                            : '';

            if(parts[1]){
                parts.splice(0,1);
                var newString = parts.join('.');
                return this.recomposeValue(newObj,newString);
            }
            return newObj;
        }        
    }
}
