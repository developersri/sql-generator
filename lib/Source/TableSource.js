class TableSource {
    constructor (obj) {
        this.table = obj.table;
        this.alias = obj.alias;
    }

    generateQueryString () {
        let result = `"${this.table}"`;
        if (this.alias) {
            result += ` AS "${this.alias}"`;
        }
        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = TableSource;