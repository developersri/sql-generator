class AggregatorProjection {
    constructor (obj) {
        this.function = obj.function;
        this.arguments = obj.arguments;
    }

    generateQueryString () {
        let result = `${this.function}(`;
        result += this.arguments.map(arg => {
            let argument = new Projection(arg);
            return argument.queryString;
        }).join(', ');
        result += ')';
        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = AggregatorProjection;