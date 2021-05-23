const Projection = require('./Projection/Projection');
const Source = require('./Source/Source');
const Filter = require('./Filter/Filter');

class Query {
    constructor (obj) {
        if (obj.sources == null) {
            throw new Error('Invalid Sources');
        }
        this.projections = obj.projections;
        this.sources = obj.sources;
        this.filter = obj.filter;
    }

    generateProjectionsQueryString () {
        let projections;
        if (this.projections instanceof Array) {
            projections = this.projections.map(proj => {
                let projection = new Projection(proj);
                return projection.queryString;
            });
            return projections.join(', ');
        }
        else {
            return '*';
        }
    }

    generateSourcesQueryString () {
        let result = '';
        this.sources.forEach((src, index) => {
            if (index !== 0) {
                if (src.type === 'table') {
                    result += `, `;
                }
                else {
                    result += ` `;
                }
            }
            let source = new Source(src);
            result += source.queryString;
        });
        return result;
    }

    generateFiltersQueryString () {
        let filter = new Filter(this.filter); 
        return filter.queryString;
    }

    generateQueryString () {
        let result = `SELECT ${this.generateProjectionsQueryString()} FROM ${this.generateSourcesQueryString()}`;
        if (this.filter) {
            result += ` WHERE ${this.generateFiltersQueryString()}`;
        }
        return result;
    }

    get queryString () {
        return '(' + this.generateQueryString() + ')';
    }
}

global.Projection = Projection;
global.Source = Source;
global.Filter = Filter;
global.Query = Query;

module.exports = Query;