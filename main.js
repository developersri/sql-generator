const argv = require('minimist')(process.argv.slice(2));
const path = require('path');

const Query = require('./lib/Query');

let inputFilePath = argv.d || argv.data;
let input;

if (inputFilePath) {
    if (path.isAbsolute(inputFilePath)) {
        input = require(inputFilePath);
    }
    else {
        input = require('./'+inputFilePath);
    }
}

let queryObj = new Query(input);
console.log(queryObj.queryString);