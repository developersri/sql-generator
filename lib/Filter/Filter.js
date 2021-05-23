const UnaryExpression = require('./UnaryExpression');
const BinaryExpression = require('./BinaryExpression');

class Filter {
    constructor (obj) {
        switch (obj.subType) {
            case 'unary':
                this.value = new UnaryExpression(obj);
                break;
            case 'binary':
                this.value = new BinaryExpression(obj);
                break;
            case 'subquery':
                this.value = new Query(obj);
                break;
            default:
                break;
        }
    }

    get queryString () {
        return this.value && this.value.queryString;
    }
}

module.exports = Filter;