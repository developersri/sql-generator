class SubQuerySource {
    constructor (obj) {
        this.value = new Query(obj)
        this.alias = obj.alias;
    }

    get queryString () {
        let result = this.value.queryString;
        if (this.alias) {
            result += ` AS "${this.alias}"`;
        }
        return result;
    }
}

module.exports = SubQuerySource;