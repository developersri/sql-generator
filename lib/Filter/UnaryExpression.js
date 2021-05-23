class UnaryExpression {
    constructor (obj) {
        this.operator = obj.operator;
        this.leftOperand = obj.leftOperand;
        this.rightOperand = obj.rightOperand;
    }

    generateQueryString () {
        let result = '';

        if (this.leftOperand) {
            let leftOp;
            if (this.leftOperand.type === 'operation') {
                leftOp = new Filter(this.leftOperand);
                result += leftOp.queryString;
            }
            else {
                leftOp = new Projection(this.leftOperand);
                result += leftOp.queryString;
            }
        }

        result += `${this.operator.value}`;

        if (this.rightOperand) {
            let rightOp;
            if (this.rightOperand.type === 'operation') {
                rightOp = new Filter(this.rightOperand);
                result += rightOp.queryString;
            }
            else {
                rightOp = new Projection(this.rightOperand);
                result += rightOp.queryString;
            }
        }

        return result;
    }

    get queryString () {
        return this.generateQueryString();
    }
}

module.exports = UnaryExpression;