class JoinTableSource {
    constructor (obj) {
        this.joinType = obj.subType || 'inner';
        this.source = obj.source;
        this.filter = obj.filter;
    }

    generateQueryString () {
        let source = new Source(this.source);
        let result = `${this.joinType.toUpperCase()} JOIN ${source.queryString}`;
        if (this.filter) {
            let filter = new Filter(this.filter);
            result += ` ON ${filter.queryString}`;
        }
        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = JoinTableSource;