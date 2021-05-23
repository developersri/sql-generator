class LiteralProjection {
    constructor (obj) {
        this.dataType = obj.dataType;
        this.value = obj.value;
    }

    generateQueryString () {
        let result = '';
        if (this.dataType === 'string') {
            result += `'${this.value}'`;
        }
        else {
            result += `${this.value}`;
        }
        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = LiteralProjection;