class ColumnProjection {
    constructor (obj) {
        this.column = obj.column;
        this.table = obj.table;
        this.alias = obj.alias;
    }

    generateQueryString () {
        let result = '';
        if (this.table) {
            result += `"${this.table}".`;
        }
        result += `"${this.column}"`;
        if (this.alias) {
            result += ` AS "${this.alias}"`;
        }
        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = ColumnProjection;