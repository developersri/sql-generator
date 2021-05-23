const TableSource = require('./TableSource');
const JoinTableSource = require('./JoinTableSource');
const SubQuerySource = require('./SubQuerySource');

class Source {
    constructor (obj) {
        switch (obj.type) {
            case 'table':
                this.value = new TableSource(obj);
                break;
            case 'join':
                this.value = new JoinTableSource(obj);
                break;
            case 'subquery':
                this.value = new SubQuerySource(obj);
                break;
            default:
                break;
        }
    }

    get queryString () {
        return this.value && this.value.queryString;
    }
}

module.exports = Source;