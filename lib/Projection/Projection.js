const ColumnProjection = require('./ColumnProjection');
const LiteralProjection = require('./LiteralProjection');
const AggregatorProjection = require('./AggregatorProjection');

class Projection {
    constructor (obj) {
        switch(obj.type) {
            case 'column':
                this.value = new ColumnProjection(obj);
                break;
            case 'literal':
                this.value = new LiteralProjection(obj);
                break;
            case 'aggregator':
                this.value = new AggregatorProjection(obj);
                break;
            default:
                this.value = null;
                break;
        }
    }

    get queryString () {
        return this.value && this.value.queryString;
    }
}

module.exports = Projection;